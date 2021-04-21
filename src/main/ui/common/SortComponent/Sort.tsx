import React from 'react'
import s from './Sort.module.css'
import CustomButton from "../CustomButton/CustomButton";

type SortPropsType = {
    sortByMore: () => void
    sortByFewer: () => void
}

export const Sort = (props: SortPropsType) => {

    return (
        <div className={s.sort}>
            <CustomButton onClick={props.sortByMore}>/\</CustomButton>
            <CustomButton onClick={props.sortByFewer}>\/</CustomButton>
        </div>
    )
}