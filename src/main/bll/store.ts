import { loginReducer } from './../../features/f1-auth/login/bll-login/loginReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { forgotReducer } from "../../features/f1-auth/forgot/bll-forgot/forgotReducer";
import { profileReducer } from '../../features/f1-auth/profile/bll-profile/profileReducer';
import { registerReducer } from '../../features/f1-auth/register/bll-register/registerReducer';
import { setPassReducer } from '../../features/f1-auth/setPass/bll-setPass/setPassReducer';
import { packsReducer } from '../../features/f2-cards/packs/bll/packsReducer';


const rootReducer = combineReducers({
    forgot: forgotReducer,
    login: loginReducer,
    profile: profileReducer,
    register: registerReducer,
    setPass: setPassReducer,
    packs: packsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof rootReducer>


export default store

// @ts-ignore
    window.store = store