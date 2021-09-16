import React from 'react';
import IconInput from '../../../services/IconInput';
import SelectInput from '../../../services/SelectInput';
import styles from '../../../../styles/register/Register.module.css';
import TextArea from '../../../services/TextArea';

const Union = ({infos, setInfos, lang, error}:any) => 
{
    return(
        <>

            <IconInput 
                type="text"
                placeholder={lang.Register.approval}
                errorMessage={typeof(error.approval) == "undefined" ? "": error.approval}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, approval: e.target.value}})}
                className={styles.input}
                required
            />
            <IconInput 
                type="text"
                placeholder={"CEO"}
                errorMessage={typeof(error.ceo) == "undefined" ? "": error.ceo}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, ceo: e.target.value}})}
                className={styles.input}
                required
            />
            
            <TextArea 
                placeholder={lang.Register.description}
                errorMessage={typeof(error.description) == "undefined" ? "": error.description}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, description: e.target.value}})}
                className={styles.input}
            />
        </>
    );
}

export default Union;