import { ThunkAction } from "redux-thunk";
import { AppStoreType } from "../../../../main/bll/store";
import { loginAPI, LoginDetailsType } from "../dal-login/loginInstance";
import {
  ProfileActions,
  ProfileActionsType
} from "./../../profile/bll-profile/profileActions";
import { LoginActions, LoginActionsType } from "./loginActions";

export const signIn = (
  data: LoginDetailsType
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  LoginActionsType | ProfileActionsType
> => async (dispatch) => {
  dispatch(LoginActions.setLoading(true));
  try {
    const res = await loginAPI.signIn(data);
    dispatch(ProfileActions.setUser(res.data));
    dispatch(LoginActions.setSuccess(true));
    dispatch(LoginActions.setLoading(false));
  } catch (e) {
    const error = e.response
      ? e.response.data.error
      : e.message + ", more details in the console";
    dispatch(LoginActions.setLoading(false));
    dispatch(LoginActions.setError(error));
  }
};

export const signOut = (): ThunkAction<
  void,
  AppStoreType,
  unknown,
  LoginActionsType
> => async (dispatch) => {
  dispatch(LoginActions.setLoading(true));
  try {
    const res = await loginAPI.signOut();
    dispatch(LoginActions.setLoading(false));
  } catch (e) {
    const error = e.response
      ? e.response.data.error
      : e.message + ", more details in the console";
    dispatch(LoginActions.setLoading(false));
    dispatch(LoginActions.setError(error));
  }
};

export const me = (): ThunkAction<
  void,
  AppStoreType,
  unknown,
  LoginActionsType | ProfileActionsType
> => async (dispatch) => {
  dispatch(LoginActions.setLoading(true));
  try {
    const res = await loginAPI.me();

    if (res.status === 200) {
      console.log(res);

      dispatch(ProfileActions.setUser(res.data));
      dispatch(LoginActions.setLoading(false));
      dispatch(LoginActions.setSuccess(true));
      dispatch(LoginActions.setUserId(res.data._id));
    }
  } catch (e) {
    const error = e.response
      ? e.response.data.error
      : e.message + ", more details in the console";
    dispatch(LoginActions.setLoading(false));
    dispatch(LoginActions.setError(error));
  }
};
