import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton";
import { PATH } from "../../../../main/ui/routes/Routes";
import s from './../../../../main/ui/common/CustomTable/CustomTable.module.css'

export type CardsTablePropsType = {
    title: string[]
    data?: any
    cardId: string
    addItemCallback?: (id: string) => void
    deleteItemCallback?: (id: string) => void
    updateItemCallback?: (id: string) => void

}

export const CardsTable: FC<CardsTablePropsType> = memo(({ title, data, cardId, addItemCallback, deleteItemCallback, updateItemCallback }) => {

    const recentDate = (date: string): string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    const onAddItemButtonClick = () => {
        addItemCallback && addItemCallback(cardId)
    }

    const onDeleteItemButtonClick = (id: string) => {
        deleteItemCallback && deleteItemCallback(id)
    }

    const onUpdateItemCallback = (id: string) => {
        updateItemCallback && updateItemCallback(id)
    }

    const titleFiller = title.map(t => <th key={'title-' + t}>
        {t}
    </th>)

    const dataFiller = data.map((dataItem: any, dataIndex: number) => <tr className={s.trStyling} key={title + '-row-' + (dataItem._id || dataIndex)}>
        <td className={s.tdStyling}>{dataItem.question}</td>
        <td className={s.tdStyling}>{dataItem.answer}</td>
        <td className={s.tdStyling}>{dataItem.grade}</td>
        <td className={s.tdStyling}>{recentDate(dataItem.updated)}</td>
        <td className={s.tdStyling}></td>
        <td className={s.tdStyling}>
            <CustomButton onClick={() => onUpdateItemCallback(dataItem._id)}>upd</CustomButton>
            <CustomButton onClick={() => onDeleteItemButtonClick(dataItem._id)}>del</CustomButton>
        </td>
    </tr>)

    return (
        <>
            <table className={s.tableStyling}>
                <thead className={s.tableStyling}>
                    <tr>
                        {titleFiller}
                        <th><CustomButton onClick={onAddItemButtonClick}>Add</CustomButton></th>
                    </tr>
                </thead>
                <tbody>
                    {dataFiller}
                </tbody>
            </table>
        </>
    )
})