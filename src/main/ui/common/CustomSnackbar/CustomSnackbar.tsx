import s from './CustomSnackbar.module.css'
import { FC, memo, useEffect, useState } from 'react'

type CustomSnackbarType = {
    title: string
    timer: number
}

export const CustomSnackbar: FC<CustomSnackbarType> = memo(({ title, timer }) => {

    const [visual, setVisual] = useState<boolean>(false)

    useEffect(() => {
        setVisual(() => true)
        const show = setTimeout(() => {
            setVisual(() => false)
        }, timer)
        return () => {
            clearTimeout(show)
        }
    }, [])

    return (
        <>
            {
                visual &&
                <div className={s.snackbar}>
                    {title}
                </div>
            }
        </>
    )
})