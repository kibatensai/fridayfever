import { Dispatch } from 'redux';
import { fridayAPI } from '../../../../main/dal/api-instance';
import { RegisterActions, RegisterActionsType } from './registerActions';
import { registerInitialState, RegisterInitState } from './registerInitState';

export const registerReducer = (state = registerInitialState, action: RegisterActionsType): RegisterInitState => {
  switch (action.type) {
    case 'register/IS-REGISTER':
      return { ...state, isRegister: action.isRegister };

    default: {
      return state;
    }
  }
};

export const loginTC = (email: string, password: string) => (dispatch: Dispatch<RegisterActionsType>) => {
  fridayAPI
    .register(email, password)
    .then((res) => {
      console.log('res');
      dispatch(RegisterActions.setIsRegisterAC(true));
    })
    .catch((error) => {
      console.log('error');
    });
};
