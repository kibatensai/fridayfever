import s from './CustomSnackbar.module.css'
import { FC, memo, useEffect, useState } from 'react'

type CustomSnackbarType = {
    title: string
}

export const CustomSnackbar: FC<CustomSnackbarType> = memo(({ title }) => {

    const [visual, setVisual] = useState<boolean>(false)

    useEffect(() => {
        setVisual(() => true)
        const show = setTimeout(() => {
            setVisual(() => false)
        }, 3000)
        return () => {
            clearTimeout(show)
        }
    }, [title])

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