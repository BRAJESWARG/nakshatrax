export interface PlanetPosition {
  rashi: string;
  house: number;
  degree: number;
  nakshatra: string;
  retrograde: boolean;
}

export interface ChartData {
  ascendant: string;
  moonSign: string;
  sunSign: string;
  planetaryPositions: Record<string, PlanetPosition>;
}

export interface KundliResult {
  chart: ChartData;
  interpretation: string;
}

export interface KundliInput {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  place: string;
  latitude: number;
  longitude: number;
}