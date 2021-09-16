import React from 'react';
import styles from '../../../styles/register/Register.module.css';
import SelectInput from '../../services/SelectInput';
import AlgeriaForm from './AlgeriaForm/AlgeriaForm';

interface activityArrayType {
    value: number
    name: string
}

interface wilayaType {
    code: string
    name: string
    value: number
}

interface RegisterPropsType {
    lang: any
    infos: any
    setInfos: (infos:any)=> any
    error: any
    onSubmit: () => any
    activities: activityArrayType[]
    zones: activityArrayType[]
    wilayas: wilayaType[]
};

const RegisterForm = ({
    lang,
    infos,
    setInfos,
    error,
    onSubmit,
    activities,
    zones,
    wilayas
}:RegisterPropsType) => 
{
    return(
        <div className={styles.desktopContainer}>
            <div className={styles.rightSide}>
                <h1>{lang.Register.title}</h1>
                <div className={styles.formContainer}>
                    <SelectInput
                        errorMessage={typeof(error.country) == "undefined" ? "": error.country}
                        onChange={e => setInfos({...infos, country: e.target.value})}
                        className={styles.input}
                    >
                        <option selected disabled>{"Votre pays"}</option>
                        <option value="dz">Algérie</option>
                    </SelectInput>
                    
                    {
                        infos.country === "dz" &&
                        <AlgeriaForm
                            lang={lang}
                            infos={infos}
                            setInfos={setInfos}
                            error={error}
                            activities={activities}
                            zones={zones}
                            wilayas={wilayas}
                        />
                    }
                    
                    <br/>
                    {
                        infos.country !== '' &&
                        <button 
                            className={"scale-down-hover " + styles.logBtn}
                            onClick={e => onSubmit()}
                        >
                            {lang.Register.title}
                        </button>
                    }
                    
                    <br/><br/>
                    <div className={styles.postLogin}>
                        <a>
                        </a>
                        <a href="login">
                            { lang.Register.login }
                        </a>
                    </div>
                </div>
            </div>
            
            <div 
                className={styles.leftSide}
                style={{
                    backgroundImage: "url(https://source.unsplash.com/1600x900/?business)"
                }}
            >
            </div>
        </div>
    );
} 

export default RegisterForm;