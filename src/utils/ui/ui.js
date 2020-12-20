import { useState, useContext, createContext } from "react";

const UIContext = createContext();

export function UIProvider(props) {
    const [theme,setTheme] = useState("LIGHT");
    const themes = {
        LIGHT: 'LIGHT',
        ONE_DARK: 'ONE_DARK',
        UNICORN: 'UNICORN'
    };


    return <UIContext.Provider value={{theme,setTheme,themes}}>{props.children}</UIContext.Provider>
}

export default function useUI(){
    let values = useContext(UIContext);
    return values;
}