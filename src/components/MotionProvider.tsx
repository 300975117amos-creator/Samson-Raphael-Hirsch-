"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type MotionPref = "system" | "reduced" | "full";

type MotionContextValue = {
  /** True when motion should be suppressed (system reduce OR manual reduced). */
  reduced: boolean;
  pref: MotionPref;
  setPref: (p: MotionPref) => void;
  cycle: () => void;
};

const MotionContext = createContext<MotionContextValue>({
  reduced: false,
  pref: "system",
  setPref: () => {},
  cycle: () => {},
});

const STORAGE_KEY = "srh-motion-pref";

export function MotionProvider({ children }: { children: ReactNode }) {
  const [pref, setPrefState] = useState<MotionPref>("system");
  const [systemReduced, setSystemReduced] = useState(false);

  // Load persisted preference.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as MotionPref | null;
    if (saved === "reduced" || saved === "full" || saved === "system") {
      setPrefState(saved);
    }
  }, []);

  // Track the system media query.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const reduced =
    pref === "reduced" || (pref === "system" && systemReduced);

  // Reflect the resolved state on <html> so CSS (and non-React code) can react.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motion = reduced ? "reduced" : "full";
  }, [reduced]);

  const setPref = useCallback((p: MotionPref) => {
    setPrefState(p);
    window.localStorage.setItem(STORAGE_KEY, p);
  }, []);

  const cycle = useCallback(() => {
    setPref(reduced ? "full" : "reduced");
  }, [reduced, setPref]);

  return (
    <MotionContext.Provider value={{ reduced, pref, setPref, cycle }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}
