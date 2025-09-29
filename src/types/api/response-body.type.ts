export interface ResponseBody<T> {
    code: string
    message: string
    data?: T
}