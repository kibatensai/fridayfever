import React from 'react'
import s from './Sort.module.css'
import {useDispatch} from "react-redux";
import {getPacks} from "../bll/packsThunks";
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton";

export const Sort = () => {
    const dispatch = useDispatch();

    const sortByMost = () => {
        dispatch(getPacks({sortPacks: "0cardsCount"}))
    }

    const sortByFewer = () => {
        dispatch(getPacks({sortPacks: "1cardsCount"}))
    }

    return (
        <div className={s.sort}>
            <CustomButton onClick={sortByMost}>/\</CustomButton>
            <CustomButton onClick={sortByFewer}>\/</CustomButton>
        </div>
    )
}