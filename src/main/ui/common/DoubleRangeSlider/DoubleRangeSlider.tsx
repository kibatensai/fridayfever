import React from "react";
import {Slider} from "@material-ui/core";
import s from './DoubleRangeSlider.module.css'

type DoubleRangeSliderProps = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
}
export const DoubleRangeSlider: React.FC<DoubleRangeSliderProps> = (
    {
        onChangeRange, value, max, min
    }) => {

    const handleSliderChange = (event: any, newValue: number | number[]) => {
        if (typeof (newValue) !== 'number') {
            onChangeRange && onChangeRange([newValue[0], newValue[1]]);
        }
    };

    function valuetext(value: number) {
        return `${value}`;
    }

    return (
        <div className={s.doubleRangeSlider}>
            <Slider value={value} min={min} max={max} onChange={handleSliderChange} valueLabelDisplay={'auto'}
                    aria-labelledby={"range-slider"} getAriaValueText={valuetext}/>
        </div>
    )
}