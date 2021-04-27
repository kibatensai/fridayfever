export type ErrorHandlingInitState = {
    error: string
    loading: boolean
    success: boolean
    getNewCards: boolean
}

export const errorHandlingInitialState: ErrorHandlingInitState = {
    error: '',
    loading: false,
    success: false,
    getNewCards: false
}