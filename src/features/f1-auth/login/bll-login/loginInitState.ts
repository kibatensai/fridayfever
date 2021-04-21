
export type LoginInitState = {
    error: string
    loading: boolean
    success: boolean
    user_id: string | null
}

export const loginInitialState: LoginInitState = {
    error: '',
    loading: false,
    success: false,
    user_id: null
}