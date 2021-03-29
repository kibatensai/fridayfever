import { Routes } from "./ui/routes/Routes"
import { Header } from './ui/header/Header'
import s from './Main.module.css'


export const Main = () => {
    return (
        <div className={s.mainContainer}>
            <Header />
            <Routes />
        </div>
    )
}