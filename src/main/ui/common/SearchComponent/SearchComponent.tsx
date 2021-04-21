import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import s from './Search.module.css'


type SearchPropsType = {
    placeholder?: string
    searchFunction: (value: string) => void
}
export const Search = (props: SearchPropsType) => {
    const [value, setValue] = useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && props.searchFunction(value)
    }
    const Search = () => {
        props.searchFunction(value)
    }

    return (
        <div className={s.search}>
            <CustomInput placeholder={props.placeholder} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <CustomButton onClick={Search}>Search</CustomButton>
        </div>
    )

}