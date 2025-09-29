export interface VehiclePageFilter extends Record<string, string | number | boolean | undefined> {
    keyword?: string
    status?: string
    page?: number
    size?: number
}