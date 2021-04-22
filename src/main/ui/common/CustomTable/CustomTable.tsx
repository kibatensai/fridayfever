import React, { FC, memo } from "react"
import { NavLink } from "react-router-dom"
import { PATH } from "../../routes/Routes"
import CustomButton from './../CustomButton/CustomButton'
import navlinkStyling from './../stylingUtils/navlinkStyling.module.css'
import s from './CustomTable.module.css'

export type CustomTablePropsType = {
    title: string[]
    data: any
    addItemCallback?: () => void
    deleteItemCallback?: (id: string) => void
    updateItemCallback?: (id: string) => void
    saveRecentIdCallback?: (id: string) => void
    setModalView?: (flag: boolean) => void
    setNewModalView?: (flag: boolean) => void
    disabled?: boolean

}

export const CustomTable: FC<CustomTablePropsType> = memo(({ title, data, disabled, addItemCallback, deleteItemCallback, updateItemCallback, saveRecentIdCallback, setModalView, setNewModalView }) => {

    const recentDate = (date: string): string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    const onAddItemButtonClick = () => {
        addItemCallback && addItemCallback()
        setNewModalView && setNewModalView(true)
    }

    const onDeleteItemButtonClick = (id: string) => {
        deleteItemCallback && deleteItemCallback(id)
    }

    const onUpdateItemCallback = (id: string) => {
        updateItemCallback && updateItemCallback(id)
        packIdSaver(id)
        setModalView && setModalView(true)
    }

    const packIdSaver = (id: string) => {
        saveRecentIdCallback && saveRecentIdCallback(id)
    }

    const titleFiller = title.map(t => <th key={'title-' + t}>
        {t}
    </th>)

    const dataFiller = data.map((dataItem: any, dataIndex: number) => <tr className={s.trStyling} key={title + '-row-' + (dataItem._id || dataIndex)}>
        <td className={s.tdStyling}>{dataItem.name}</td>
        <td className={s.tdStyling}>{dataItem.cardsCount}</td>
        <td className={s.tdStyling}>{recentDate(dataItem.updated)}</td>
        <td className={s.tdStyling}></td>
        <td className={s.tdStyling}>
            <CustomButton onClick={() => onUpdateItemCallback(dataItem._id)} disabled={disabled}>upd</CustomButton>
            <CustomButton onClick={() => onDeleteItemButtonClick(dataItem._id)} disabled={disabled}>del</CustomButton>
            <NavLink to={`${PATH.CARDS}/${dataItem._id}`} className={navlinkStyling.loginLink} onClick={() => packIdSaver(dataItem._id)}>Cards</NavLink>
        </td>
    </tr>)

    return (
        <>
            <table className={s.tableStyling}>
                <thead className={s.tableStyling}>
                    <tr>
                        {titleFiller}
                        <th><CustomButton onClick={onAddItemButtonClick} disabled={disabled}>Add</CustomButton></th>
                    </tr>
                </thead>
                <tbody>
                    {dataFiller}
                </tbody>
            </table>
        </>
    )
})