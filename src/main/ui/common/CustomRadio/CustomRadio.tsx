import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from "react";
import style from './CustomRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const CustomRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)


        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={style.label} key={name + "-" + i}>
            <input className={style.radio}
                name={name}
                onChange={onChangeCallback}
                type={"radio"}
                value={o}
                checked={value === o}
                // name, checked, value, onChange
            />
            <div className={style.design}></div>
            <span className={style.text}>
                {o}
            </span>

        </label>
    )) : [];

    return (
        <div className={style.radio_wrapper}>
            {mappedOptions}
        </div>
    );
}

export default CustomRadio;
