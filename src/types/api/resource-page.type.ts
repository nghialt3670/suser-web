export interface ResourcePage<T> {
    items: T[]
    page: number
    size: number
    total: number
}