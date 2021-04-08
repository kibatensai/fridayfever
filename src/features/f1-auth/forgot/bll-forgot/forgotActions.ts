import {InferActionsType} from "../../../../main/bll/action-types";

export type ForgotActionsType = InferActionsType<typeof ForgotActions>;

export const ForgotActions = {
    setError: (error: string) =>
        ({
            type: "forgot/SET_ERROR",
            error,
        } as const),
    setSuccess: (success: boolean) =>
        ({
            type: "forgot/SET_SUCCESS",
            success,
        } as const),
    setMessage: (message: string) =>
        ({
            type: "forgot/SET_MESSAGE",
            message,
        } as const)

}