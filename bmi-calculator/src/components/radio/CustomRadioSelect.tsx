import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { FC } from "react";

interface ICustomRadioSelect{
    onChange : (e:any)=>void
    className ?: string
    value ?: string
}
const CustomRadioSelect : FC<ICustomRadioSelect> = (props)=>{
    const {onChange,className,value} = props
    return(
        <FormControl className={className}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="d-flex flex-row"
                value={value}
                onChange={onChange}
            >
                <FormControlLabel value={"female"} control={<Radio />} label="Female" />
                <FormControlLabel value={"male"} control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl>
    )
}
export default CustomRadioSelect