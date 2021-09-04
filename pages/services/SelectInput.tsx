import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ErrorIcon from '@material-ui/icons/Error';
interface IconInputType {
    Icon: any
    placeholder: string
    errorMessage: string
    onChange: (e:any) => any
    value: string|undefined
    required: boolean
    children: any
    className
}


const SelectInput = ({
    Icon,
    placeholder,
    errorMessage,
    onChange, 
    value,
    required,
    children,
    className
}:IconInputType) => 
{
    const [isFocused, setIsFocused] = useState(false);

    const defaultStyle = {
        container: {
            width: "100%",
            height: "60px",
        },
        inputContainer: {
            width: "100%",
            height: "100%",
            display: "flex",
            borderRadius: 4,
            border: errorMessage.length > 0 ? "solid red 2px" : !isFocused ? "solid gray 1px" : "solid #1976D1 2px",
            overflow: "hidden"
        },
        input: {
            width: Icon ? "85%" : "100%",
            height: "100%",
            border: "none",
            outline: "none",
            fontSize: "1em",
            paddingLeft: Icon ? 0 : "25px"
        },
        btn: {
            width: "15%",
            height: "100%",
            border: "none",
            backgroundColor: "rgba(0,0,0,0)"
        },
        icon: {
            fontSize: "2em"
        },
        error: {
            color: "red",
            margin: 0,
            padding: "5px",
            textAlign: "left",
            display: "flex",
            border:"none",
            backgroundColor:"rgba(0,0,0,0)"
        }
    }

    return (
        <div style={defaultStyle.container} className={className}>
            <div style={defaultStyle.inputContainer}>
                {
                    Icon && 
                    <button 
                        style={defaultStyle.btn}
                    >
                        <Icon style={defaultStyle.icon} />
                    </button>
                }
                <motion.select 
                    style={defaultStyle.input} 
                    placeholder={placeholder+(required ? " *": "")}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={e => onChange(e)}
                    value={value}
                >
                    {children}
                </motion.select>
            </div>
            {
                errorMessage.length > 0 && 
                <button style={defaultStyle.error}>
                    <ErrorIcon style={{fontSize: "1.2em"}}/>
                    <span style={{
                        paddingLeft: "5px",
                    }}>
                        {errorMessage}
                    </span>
                </button>
            }
        </div>
    );
}

export default SelectInput;
