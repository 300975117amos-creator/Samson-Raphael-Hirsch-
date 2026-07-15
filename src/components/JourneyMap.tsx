"use client";

import { useState } from "react";
import { journey, GEO_BOUNDS, type Place } from "@/content/geo";
import { useMotion } from "./MotionProvider";
import styles from "./JourneyMap.module.css";

const W = 100;
const H = 68;

function project(p: Place) {
  const { lonMin, lonMax, latMin, latMax } = GEO_BOUNDS;
  const x = ((p.lon - lonMin) / (lonMax - lonMin)) * W;
  const y = ((latMax - p.lat) / (latMax - latMin)) * H;
  return { x, y };
}

const points = journey.map(project);
const routeD = points.map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x} ${pt.y}`).join(" ");

/** Faint graticule so the schematic reads as a map without inventing borders. */
const gridLons = [8, 10, 12, 14, 16];
const gridLats = [50, 52, 54];

export function JourneyMap() {
  const { reduced } = useMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = journey.find((p) => p.id === activeId);

  return (
    <figure className={styles.figure}>
      <div className={styles.mapWrap}>
        <svg
          className={styles.svg}
          viewBox={`-6 -4 ${W + 20} ${H + 12}`}
          role="img"
          aria-label="Schematic map of Rabbi Hirsch's rabbinic posts, in order: Hamburg, Oldenburg, Emden and Aurich in East Friesland, Nikolsburg in Moravia, and Frankfurt am Main."
        >
          {/* graticule */}
          <g className={styles.grid} aria-hidden="true">
            {gridLons.map((lon) => {
              const x = ((lon - GEO_BOUNDS.lonMin) / (GEO_BOUNDS.lonMax - GEO_BOUNDS.lonMin)) * W;
              return <line key={`v${lon}`} x1={x} y1={-2} x2={x} y2={H + 2} />;
            })}
            {gridLats.map((lat) => {
              const y = ((GEO_BOUNDS.latMax - lat) / (GEO_BOUNDS.latMax - GEO_BOUNDS.latMin)) * H;
              return <line key={`h${lat}`} x1={-4} y1={y} x2={W + 4} y2={y} />;
            })}
          </g>

          {/* route */}
          <path
            className={`${styles.route} ${reduced ? styles.routeStatic : ""}`}
            d={routeD}
            fill="none"
          />

          {/* nodes */}
          {journey.map((p, i) => {
            const { x, y } = points[i];
            const isActive = p.id === activeId;
            return (
              <g
                key={p.id}
                className={styles.node}
                data-active={isActive}
                transform={`translate(${x} ${y})`}
                onMouseEnter={() => setActiveId(p.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <circle className={styles.halo} r={isActive ? 4.2 : 0} />
                <circle className={styles.dot} r={isActive ? 2.1 : 1.5} />
                <text className={styles.city} x={0} y={-3.2} textAnchor="middle">
                  {p.city}
                </text>
                <text className={styles.yr} x={0} y={4.6} textAnchor="middle">
                  {p.year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className={styles.caption}>
        Schematic map — cities at their approximate relative positions (not to
        scale; no borders implied). The sequence of posts is corroborated; several
        middle-post appointment years are approximate and still being verified.
      </figcaption>

      {/* Accessible, interactive companion — the primary source of the data. */}
      <ol className={styles.legend} aria-label="Rabbinic posts in order">
        {journey.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              className={styles.legendItem}
              data-active={p.id === activeId}
              onFocus={() => setActiveId(p.id)}
              onBlur={() => setActiveId(null)}
              onMouseEnter={() => setActiveId(p.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <span className={styles.legendYear}>{p.year}</span>
              <span className={styles.legendCity}>
                {p.city}
                <span className={styles.legendRegion}> · {p.region}</span>
              </span>
              <span className={styles.legendRole}>{p.role}</span>
            </button>
          </li>
        ))}
      </ol>

      <p className={styles.live} aria-live="polite">
        {active ? `${active.city}: ${active.role} (${active.year}).` : ""}
      </p>
    </figure>
  );
}
