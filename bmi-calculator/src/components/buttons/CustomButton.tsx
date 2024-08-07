import {  Fab } from "@mui/material";
import { FC } from "react";


interface ICustomButton{
    label : string;
    className ?:string
}

const CustomButton : FC<ICustomButton> = (props)=>{
    const {label,className} = props
    return(
        <Fab 
            type="submit"
            variant="extended" 
            size="medium" 
            color="primary" 
            className={className}
        >
                {label}
        </Fab>
    )
}
export default CustomButton;