import React from "react"
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton"
import CustomCheckbox from "../../../../main/ui/common/CustomCheckbox/CustomCheckbox"
import CustomInput from "../../../../main/ui/common/CustomInput/CustomInput"
import CustomRadio from "../../../../main/ui/common/CustomRadio/CustomRadio"
import s from './TestComponent.module.css'

export const TestComponent = () => {
    return (
        <div className={s.testContainer}>
            <CustomButton>test</CustomButton>
            <CustomCheckbox />
            <CustomInput />
            <CustomRadio options={[1, 2]} />
        </div>
    )
}