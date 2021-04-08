import { InferActionsType } from '../../../../main/bll/action-types';

export type RegisterActionsType = InferActionsType<typeof RegisterActions>;

export const RegisterActions = {
  setIsRegisterAC: (isRegister: boolean) => ({
    type: 'register/IS-REGISTER',
    isRegister,
  } as const),
};
