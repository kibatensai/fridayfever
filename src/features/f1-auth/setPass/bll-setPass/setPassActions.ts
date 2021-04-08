import {InferActionsType} from "../../../../main/bll/action-types";

export type SetPassActionsType = InferActionsType<typeof SetPassActions>;

export const SetPassActions = {
    setError: (error: string) => ({
            type: 'setPass/SET_ERROR',
        error
        }as const),
    setSuccess: (success: boolean) => ({
        type: 'setPass/SET_SUCCESS',
        success
    }as const)
}