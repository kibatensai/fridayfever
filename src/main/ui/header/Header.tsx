import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStoreType } from "../../bll/store";
import { PATH } from "../routes/Routes";
import style from './Header.module.css'

export const Header = () => {

    const recent_pack_id = useSelector<AppStoreType, string>(state => state.packs.recent_pack_id)
    const samePath = recent_pack_id ? `${recent_pack_id}` : ''


    return (
        <div className={style.nav_container}>
        <div className={style.nav_bar}>
            <NavLink to={PATH.TEST} className={style.nav_link} activeClassName={style.current}>Home</NavLink>
            <NavLink to={PATH.LOGIN} className={style.nav_link} activeClassName={style.current}>Login</NavLink>
            <NavLink to={PATH.REGISTER} className={style.nav_link} activeClassName={style.current}>Register</NavLink>
            <NavLink to={PATH.PROFILE} className={style.nav_link} activeClassName={style.current}>Profile</NavLink>
            <NavLink to={PATH.FORGOT} className={style.nav_link} activeClassName={style.current}>Forgot</NavLink>
            <NavLink to={PATH.SET_PASS} className={style.nav_link} activeClassName={style.current}>Set Password</NavLink>
            <NavLink to={PATH.PACKS} className={style.nav_link} activeClassName={style.current}>Packs</NavLink>
            <NavLink to={`${PATH.CARDS}/${samePath}`} className={style.nav_link} activeClassName={style.current}>Cards</NavLink>
            <NavLink to={`${PATH.LEARNING}/${samePath}`} className={style.nav_link} activeClassName={style.current}>Learning</NavLink>
        </div>
        </div>
    );
}
