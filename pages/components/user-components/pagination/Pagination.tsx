import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface paginationType 
{
    shape: "string"
    action: (param:any) => any
    size: number 
    selected: number 
}

const Pagination = () => 
{
    const style = {
        pagesContainer: {
            width: "100%",
            height: "40px",
            backgroundColor: "red"
        },
        arrowbtn: {
            height: "100%"
        },
        
    }

    return(
        <div style={style.pagesContainer}>
            <button style={style.arrowbtn}>
                <ArrowBackIcon/>
            </button>
        </div>
    )
}

export default Pagination;