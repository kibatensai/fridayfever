import { InferActionsType } from "../../../bll/action-types";

export type ErrorHadnlingActionsType = InferActionsType<typeof ErrorHandlingActions>;

export const ErrorHandlingActions = {
    setError: (error: string) =>
    ({
      type: "errorHandling/SET_ERROR",
      error,
    } as const),
    setLoading: (loading: boolean) =>
    ({
      type: "errorHandling/SET_LOADING",
      loading,
    } as const),
    setSuccess: (success: boolean) =>
    ({
      type: "errorHandling/SET_SUCCESS",
      success,
    } as const),
};