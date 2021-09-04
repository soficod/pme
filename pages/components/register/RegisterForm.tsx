import React, { useEffect } from 'react';
import styles from '../../../styles/register/Register.module.css';
import IconInput from '../../services/IconInput';
import LockIcon from '@material-ui/icons/Lock';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonIcon from '@material-ui/icons/Person'
import { motion } from 'framer-motion';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PublicIcon from '@material-ui/icons/Public';
import PrintIcon from '@material-ui/icons/Print';
import SelectInput from '../../services/SelectInput';
import CompanyForm from './CompanyForm';
import ExpertForm from './ExpertForm';
import Union from './Union';
import Office from './Office';

interface RegisterPropsType {
    lang: any
    infos: any
    setInfos: (infos:any)=> any
    error: any
    onSubmit: () => any
};

const RegisterForm = ({
    lang,
    infos,
    setInfos,
    error,
    onSubmit
}:RegisterPropsType) => 
{
    const updateEmails = (index:number, newEmail:string) => 
    {
        let clone = [...infos.emails];
        clone[index] = newEmail;
        setInfos({...infos, emails: clone});
    }

    const deleteEmail = (index:number) => 
    {
        let clone = infos.emails;
        clone.splice(index,1)
        setInfos({...infos, emails:clone});
    }

    const addEmail = () => 
    {
        setInfos({...infos, emails:[...infos.emails, '']})
    }

    const updatePhones = (index:number, newPhone:string) => 
    {
        let clone = [...infos.phones];
        clone[index] = newPhone;
        setInfos({...infos, phones: clone});
    }

    const deletePhone = (index:number) => 
    {
        let clone = infos.phones;
        clone.splice(index,1)
        setInfos({...infos, phones:clone});
    }

    const addPhone = () => 
    {
        setInfos({...infos, phones:[...infos.phones, '']})
    }

    const updateFax = (index:number, newFax:string) => 
    {
        let clone = [...infos.fax];
        clone[index] = newFax;
        setInfos({...infos, fax: clone});
    }

    const deleteFax = (index:number) => 
    {
        let clone = infos.fax;
        clone.splice(index,1)
        setInfos({...infos, fax:clone});
    }

    const addFax = () => 
    {
        setInfos({...infos, fax:[...infos.fax, '']})
    }

    useEffect(() => 
    {
        if(infos.type === "expert" || infos.type === "office")
            setInfos({...infos, typeInfos: {areas: ['']}});
        else 
            setInfos({...infos, typeInfos: {}});
    }, [infos.type])

    return(
        <div className={styles.desktopContainer}>
            <div className={styles.rightSide}>
                <h1>{lang.Register.title}</h1>
                <div className={styles.formContainer}>
                    <IconInput 
                        Icon={PersonIcon}
                        type="text"
                        placeholder={lang.Register.nameHolder}
                        errorMessage={typeof(error.name) == "undefined" ? "": error.name}
                        onChange={e => setInfos({...infos, name: e.target.value})}
                        className={styles.input}
                        required
                    />

                    <IconInput 
                        Icon={AlternateEmailIcon}
                        type="email"
                        placeholder={lang.Login.mailHolder}
                        errorMessage={typeof(error.email) == "undefined" ? "": error.email}
                        onChange={e => setInfos({...infos, email: e.target.value})}
                        className={styles.input}
                        required
                    />
                    
                    {
                        infos.emails.map((mail:string, index:number) => {
                            return(
                                <div className={styles.emailsContainer}>
                                    <div className={styles.deleteBtnContainer}>
                                        <HighlightOffIcon
                                            className={styles.deleteBtn}
                                            onClick={e => deleteEmail(index)}
                                        />
                                    </div>
                                    <IconInput 
                                        Icon={AlternateEmailIcon}
                                        type="email"
                                        placeholder={lang.Login.mailHolder}
                                        errorMessage=""
                                        onChange={e => updateEmails(index, e.target.value)}
                                        className={styles.input}
                                        value={infos.emails[index]}
                                    />
                                </div>
                            )
                        })
                    }
                    <div className={styles.addEmail}>
                        <button onClick={e => addEmail()}>
                            <AddCircleOutlineIcon style={{fontSize: "1.4em"}}/> 
                            <span style={{
                                paddingLeft: "5px", 
                                fontSize: "1em", 
                                paddingTop: "2px", 
                                paddingRight: "5px"
                            }}>
                                {lang.Register.addEmail}
                            </span>
                        </button>
                    </div>
                    
                    <IconInput 
                        Icon={LockIcon}
                        placeholder={lang.Login.passwordHolder}
                        type="password"
                        errorMessage={typeof(error.password) == "undefined" ? "": error.password}
                        onChange={e => setInfos({...infos, password: e.target.value})}
                        className={styles.input}
                        required
                    />

                    <IconInput 
                        type="number"
                        placeholder={"Wilaya"}
                        errorMessage={typeof(error.wilaya) == "undefined" ? "": error.wilaya}
                        onChange={e => setInfos({...infos, wilaya: e.target.value})}
                        className={styles.input}
                        required
                    />

                    
                    <IconInput 
                        type="text"
                        placeholder={"Daira"}
                        errorMessage={typeof(error.daira) == "undefined" ? "": error.daira}
                        onChange={e => setInfos({...infos, daira: e.target.value})}
                        className={styles.input}
                        required
                    />


                    <IconInput 
                        type="text"
                        placeholder={lang.Register.townHolder}
                        errorMessage={typeof(error.town) == "undefined" ? "": error.town}
                        onChange={e => setInfos({...infos, town: e.target.value})}
                        className={styles.input}
                        required
                    />

                    
                    <IconInput 
                        Icon={PublicIcon}
                        type="url"
                        placeholder={lang.Register.websiteHolder}
                        errorMessage={typeof(error.website) == "undefined" ? "": error.website}
                        onChange={e => setInfos({...infos, website: e.target.value})}
                        className={styles.input}
                    />

                    
                    
                    {
                        infos.phones.map((phone:string, index:number) => {
                            return(
                                <div className={styles.emailsContainer}>
                                    <div className={styles.deleteBtnContainer}>
                                        <HighlightOffIcon
                                            className={styles.deleteBtn}
                                            onClick={e => deletePhone(index)}
                                        />
                                    </div>
                                    <IconInput 
                                        Icon={PhoneIphoneIcon}
                                        type="phone"
                                        placeholder={lang.Register.phoneHolder}
                                        errorMessage=""
                                        onChange={e => updatePhones(index, e.target.value)}
                                        className={styles.input}
                                        value={infos.phones[index]}
                                    />
                                </div>
                            )
                        })
                    }
                    <div className={styles.addEmail}>
                        <button onClick={e => addPhone()}>
                            <AddCircleOutlineIcon style={{fontSize: "1.4em"}}/> 
                            <span style={{
                                paddingLeft: "5px", 
                                fontSize: "1em", 
                                paddingTop: "2px", 
                                paddingRight: "5px"
                            }}>
                                {lang.Register.addPhone}
                            </span>
                        </button>
                    </div>

                    

                    {
                        infos.fax.map((f:string, index:number) => {
                            return(
                                <div className={styles.emailsContainer}>
                                    <div className={styles.deleteBtnContainer}>
                                        <HighlightOffIcon
                                            className={styles.deleteBtn}
                                            onClick={e => deleteFax(index)}
                                        />
                                    </div>
                                    <IconInput 
                                        Icon={PrintIcon}
                                        type="text"
                                        placeholder={lang.Register.faxHolder}
                                        errorMessage=""
                                        onChange={e => updateFax(index, e.target.value)}
                                        className={styles.input}
                                        value={infos.fax[index]}
                                    />
                                </div>
                            )
                        })
                    }
                    <div className={styles.addEmail}>
                        <button onClick={e => addFax()}>
                            <AddCircleOutlineIcon style={{fontSize: "1.4em"}}/> 
                            <span style={{
                                paddingLeft: "5px", 
                                fontSize: "1em", 
                                paddingTop: "2px", 
                                paddingRight: "5px"
                            }}>
                                {lang.Register.addFax}
                            </span>
                        </button>
                    </div>

                    

                    <SelectInput
                        placeholder={lang.Register.websiteHolder}
                        errorMessage={typeof(error.type) == "undefined" ? "": error.type}
                        onChange={e => setInfos({...infos, type: e.target.value})}
                        className={styles.input}
                    >
                        <option selected disabled>{lang.Register.default_select}</option>
                        <option value="company">{lang.Register.company}</option>
                        <option value="expert">{lang.Register.expert}</option>
                        <option value="union">{lang.Register.union}</option>
                        <option value="office">{lang.Register.office}</option>
                    </SelectInput>
                    
                    
                    {
                        infos.type === "company" &&
                        <CompanyForm
                            lang={lang}
                            infos={infos}
                            setInfos={setInfos}
                            error={error}
                        />
                    }

                    {
                        infos.type === "expert" &&
                        <ExpertForm
                            lang={lang}
                            infos={infos}
                            setInfos={setInfos}
                            error={error}
                        />
                    }

                    {
                        infos.type === "union" &&
                        <Union
                            lang={lang}
                            infos={infos}
                            setInfos={setInfos}
                            error={error}
                        />
                    }

                    {
                        infos.type === "office" &&
                        <Office
                            lang={lang}
                            infos={infos}
                            setInfos={setInfos}
                            error={error}
                        />
                    }

                    <br/>

                    <motion.button 
                        className={styles.logBtn}
                        whileHover={{
                            scale: 0.95
                        }}
                        onClick={e => onSubmit()}
                    >
                        {lang.Register.title}
                    </motion.button>

                    
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