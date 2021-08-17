import { createContext } from 'react';
import { useLanguage } from './useLanguage';

export const langContext = createContext({
    lang: "",
    changeLanguage: ()=>{
        
    }
});