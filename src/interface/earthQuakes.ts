// Generated by https://quicktype.io

export interface EarthQuakes {
  type: string
  metadata: Metadata
  features: Feature[]
  bbox: number[]
}

export interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
  id: string
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Properties {
  mag: number
  place: string
  time: number
  updated: number
  tz: null
  url: string
  detail: string
  felt: null
  cdi: null
  mmi: null
  alert: null
  status: string
  tsunami: number
  sig: number
  net: string
  code: string
  ids: string
  sources: string
  types: string
  nst: number | null
  dmin: number | null
  rms: number
  gap: number | null
  magType: string
  type: string
  title: string
}

export interface Metadata {
  generated: number
  url: string
  title: string
  status: number
  api: string
  count: number
}

// Generated by https://quicktype.io

export interface FilterData {
  earthQuakes: EarthQuake[]
}

export interface EarthQuake {
  past_hour?: Month
  past_day?: Month
  week?: Month
  month?: Month
}

export interface Month {
  all: All
  magnitude: Magnitude[]
}

export interface All {
  label: string
  value: string
}

export interface Magnitude {
  MAGNITUDE_1?: All
  MAGNITUDE_2?: All
  MAGNITUDE_4?: All
}
