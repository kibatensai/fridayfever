import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import Button from '../../../../main/ui/common/CustomButton/CustomButton';
import Input from '../../../../main/ui/common/CustomInput/CustomInput';
import { PATH } from '../../../../main/ui/routes/Routes';
import { loginTC } from '../bll-register/registerReducer';
import { AppStoreType } from '../../../../main/bll/store';

export const Register = () => {
  const dispatch = useDispatch();

  const isRegister = useSelector<AppStoreType, boolean>((state) => state.register.isRegister);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repPass, setrepPpass] = useState('');

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const changePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.currentTarget.value);
  };
  const changeRepPass = (e: ChangeEvent<HTMLInputElement>) => {
    setrepPpass(e.currentTarget.value);
  };

  const onSubmit = () => {
    dispatch(loginTC(email, pass));
  };

  if (isRegister) {
    return <Redirect to={'/login'} />;
  }

  return (
    <>
      Register Page
      <Input value={email} onChange={changeEmail} placeholder={'Enter your email'} />
      <Input value={pass} onChange={changePass} type={'password'} placeholder={'Enter your pass'} />
      {pass !== repPass ? <div style={{ color: 'red' }}>Passwords should be equal </div> : null}
      <Input value={repPass} onChange={changeRepPass} type={'password'} placeholder={'Repeat pass'} />
      <Button onClick={onSubmit}>register</Button>
      <NavLink to={PATH.LOGIN}>Sign in</NavLink>
    </>
  );
};
