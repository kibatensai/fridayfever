import { LoginActions, LoginActionsType } from "./loginActions";
import { ThunkAction } from "redux-thunk";
import { AppStoreType } from "../../../../main/bll/store";
import { loginAPI, LoginDetailsType } from "../dal-login/loginInstance";

export const signIn = (
  data: LoginDetailsType
): ThunkAction<void, AppStoreType, unknown, LoginActionsType> => async (
  dispatch
) => {
  dispatch(LoginActions.setLoading(true))
  try {
    const res = await loginAPI.signIn(data);
    dispatch(LoginActions.setSuccess(true))
    dispatch(LoginActions.setLoading(false))
  } catch (e) {
      const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
      dispatch(LoginActions.setSuccess(false))
      dispatch(LoginActions.setLoading(false))
      dispatch(LoginActions.setError(error))
  }
};
