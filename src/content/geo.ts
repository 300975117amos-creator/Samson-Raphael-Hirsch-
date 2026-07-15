/**
 * Geographic anchors for Hirsch's life. Coordinates are real (approximate
 * lat/long of well-known cities) and used only to draw a SCHEMATIC relative-
 * position map — not an authoritative border/coastline map. The SEQUENCE of
 * posts is corroborated (SRC-001/002/004); several middle-post appointment YEARS
 * are not yet confirmed and are labeled approximate (see RISKS R-H04/H05).
 */
export type Place = {
  id: string;
  city: string;
  region: string;
  lat: number;
  lon: number;
  year: string;
  role: string;
  status: "corroborated" | "single-source" | "disputed";
  sources: string[];
};

export const journey: Place[] = [
  {
    id: "hamburg",
    city: "Hamburg",
    region: "Free City of Hamburg",
    lat: 53.55,
    lon: 10.0,
    year: "1808",
    role: "Born; early study under Isaac Bernays",
    status: "corroborated",
    sources: ["SRC-001", "SRC-002", "SRC-004"],
  },
  {
    id: "oldenburg",
    city: "Oldenburg",
    region: "Grand Duchy of Oldenburg",
    lat: 53.14,
    lon: 8.21,
    year: "c. 1830",
    role: "First rabbinic post (Landesrabbiner)",
    status: "single-source",
    sources: ["SRC-001", "SRC-004"],
  },
  {
    id: "emden",
    city: "Emden / Aurich",
    region: "East Friesland",
    lat: 53.37,
    lon: 7.21,
    year: "1840s (approx.)",
    role: "Rabbinate of East Friesland",
    status: "single-source",
    sources: ["SRC-001", "SRC-004"],
  },
  {
    id: "nikolsburg",
    city: "Nikolsburg",
    region: "Moravia (now Mikulov)",
    lat: 48.81,
    lon: 16.64,
    year: "c. 1847",
    role: "Chief Rabbi of Moravia",
    status: "single-source",
    sources: ["SRC-001", "SRC-002"],
  },
  {
    id: "frankfurt",
    city: "Frankfurt am Main",
    region: "Free City of Frankfurt",
    lat: 50.11,
    lon: 8.68,
    year: "1851–1888",
    role: "Rabbi of the IRG until his death",
    status: "corroborated",
    sources: ["SRC-001", "SRC-002", "SRC-004"],
  },
];

/** Bounding box for the schematic projection (lon/lat degrees). */
export const GEO_BOUNDS = { lonMin: 6, lonMax: 18, latMin: 48, latMax: 54.5 };
