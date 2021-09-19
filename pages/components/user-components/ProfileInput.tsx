import React, { useState } from 'react'

interface profilInputPropsType {
    placeholder: string
    value: string
    disabledClassName: string
    className: string,
    editable: boolean
}

const ProfileInput = ({
    placeholder, 
    value,
    disabledClassName,
    className,
    editable
}:profilInputPropsType) => 
{
    const [edit, setEditMode] = useState(false);
    const [val, setVal] = useState();
    function validURL(str:string) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    return(
        <>
            {
                !editable || !edit ?
                <>
                    {
                        validURL(value) ?
                        <a href={value} target="_blank">
                            <input 
                                type="url" 
                                value={value}
                                disabled
                                className={disabledClassName + " linkInput"}
                            />
                        </a>
                        :
                        <input 
                            type="text" 
                            value={value}
                            disabled
                            className={disabledClassName}
                        />
                    }
                </>
                :
                <input 
                    type="text" 
                    className={className}
                />
            }
        </>
    )
}

export default ProfileInput;