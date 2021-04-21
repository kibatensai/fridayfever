import { FC } from 'react'
import s from './CustomModalWindow.module.css'

interface ICustomModalWindow {
    active: boolean
    setActive: (flag: boolean) => void
}

export const CustomModalWindow: FC<ICustomModalWindow> = ({active, setActive, children}) => {
    const modalStylingClass = active ? `${s.modal} ${s.modal_active}` : `${s.modal}`
    const modalContentStylingClass = active ? `${s.modal_content} ${s.modal_content_active}` : `${s.modal_content}`
    return (
        <div className={modalStylingClass} onClick={() => setActive(false)}>
            <div className={modalContentStylingClass} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}