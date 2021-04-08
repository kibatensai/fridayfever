
export type ForgotInitState = {
    error: string
    loading: boolean
    success: boolean
    message: string
}


export const forgotInitialState: ForgotInitState = {
    error: '',
    loading: false,
    success: true,
    message: ""
}