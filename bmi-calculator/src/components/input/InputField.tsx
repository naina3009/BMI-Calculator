import { TextField } from "@mui/material";
import { FC } from "react";
import "./InputField.css"

interface IInputField{
    value : number;
    onChange ?: (e:any)=>void
    placeHolder ?: string
    className ?:string
    label ?: string
    name : string
}
const InputField : FC<IInputField> = (props)=>{

    const {value,onChange,placeHolder,className,label,name} = props
    return(
     
       <div className="input-layout">
       <TextField 
            id="outlined-basic" 
            name={name}
            label={label ?? ""}
            variant="outlined"
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
            className={className}
        />
       </div>
        
      
    )
} 
export default InputField