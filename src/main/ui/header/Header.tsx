import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../routes/Routes";
import style from './Header.module.css'

export const Header = () => {



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
            <NavLink to={PATH.CARDS} className={style.nav_link} activeClassName={style.current}>Cards</NavLink>
        </div>
        </div>
    );
}
