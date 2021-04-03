
export type LoginInitState = {
    error: string
    loading: boolean
    success: boolean

}

export const loginInitialState: LoginInitState = {
    error: '',
    loading: false,
    success: false
}