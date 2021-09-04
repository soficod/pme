import React from 'react';
import styles from '../../../styles/login/Login.module.css';
import IconInput from '../../services/IconInput';
import LockIcon from '@material-ui/icons/Lock';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { motion } from 'framer-motion';

interface LoginPropsType {
    lang: any
    email: string
    setEmail:(email:string) => any,
    password: string
    setPassword: (password: string) => any
    error: {
        email: string 
        password: string
    }
    onSubmit: () => any
}

const LoginForm = ({
    lang,
    email,
    setEmail,
    password,
    setPassword,
    error,
    onSubmit
}:LoginPropsType) => 
{
    return(
        <div className={styles.desktopContainer}>
            <div 
                className={styles.leftSide}
                style={{
                    backgroundImage: "url(https://source.unsplash.com/1600x900/?business)"
                }}
            >
            </div>

            <div className={styles.rightSide}>
                <h1>{lang.Login.title}</h1>
                <div className={styles.formContainer}>
                    <IconInput 
                        Icon={AlternateEmailIcon}
                        type="email"
                        placeholder={lang.Login.mailHolder}
                        errorMessage={error.email}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <br/><br/>
                    <IconInput 
                        Icon={LockIcon}
                        placeholder={lang.Login.passwordHolder}
                        type="password"
                        errorMessage={error.password}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <br/><br/>
                    <motion.button 
                        className={styles.logBtn}
                        whileHover={{
                            scale: 0.95
                        }}
                        onClick={e => onSubmit()}
                    >
                        {lang.Login.title}
                    </motion.button>
                    <br/><br/>
                    
                    <div className={styles.postLogin}>
                        <a href="#">
                            { lang.Login.forgotPassword }
                        </a>
                        <a href="register">
                            { lang.Login.register }
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default LoginForm;