export interface KundliInput {
    name: string
    dateOfBirth: string
    timeOfBirth: string
    place: string
    latitude: number
    longitude: number
}

export interface KundliResult {
    chart: any
    interpretation: string
}