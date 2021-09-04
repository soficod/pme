import React from 'react';
import IconInput from '../../services/IconInput';
import SelectInput from '../../services/SelectInput';
import styles from '../../../styles/register/Register.module.css';
import TextArea from '../../services/TextArea';

const Union = ({infos, setInfos, lang}:any) => 
{
    return(
        <>

            <IconInput 
                type="text"
                placeholder={lang.Register.approval}
                errorMessage=""
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, approval: e.target.value}})}
                className={styles.input}
                required
            />
            <IconInput 
                type="text"
                placeholder={"CEO"}
                errorMessage=""
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, ceo: e.target.value}})}
                className={styles.input}
                required
            />
            
            <TextArea 
                placeholder={lang.Register.description}
                errorMessage=""
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, description: e.target.value}})}
                className={styles.input}
            />
        </>
    );
}

export default Union;