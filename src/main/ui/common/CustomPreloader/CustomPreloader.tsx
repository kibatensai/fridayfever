import preloader from './../../../assets/dbringload.svg'
import s from './CustomPreloader.module.css'

export const Preloader = () => {
    return (<div className={s.preloaderContainer}>
        <img src={preloader} alt='Loading...' />
    </div>)
}