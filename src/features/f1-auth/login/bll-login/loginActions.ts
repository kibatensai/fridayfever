import {InferActionsType} from "../../../../main/bll/action-types";

export type LoginActionsType = InferActionsType<typeof LoginActions>;

export const LoginActions = {
    setError: (error: string) =>
        ({
            type: "login/SET_ERROR",
            error,
        } as const),
    setLoading: (loading: boolean) =>
        ({
            type: "login/SET_LOADING",
            loading,
        } as const),
    setSuccess: (success: boolean) =>
        ({
            type: "login/SET_SUCCESS",
            success,
        } as const),
    setUserId: (userId: string) =>
        ({
            type: "login/SET_USER_ID",
            userId
        } as const)
};
