import * as React from 'react'
import {useContext,useState} from 'react'

const ThemeContext = React.createContext(true); 
const ThemeUpdateContext = React.createContext<any>({});

export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

export const ThemeProvider:React.FC=({children})=>{
    const [darkTheme,setDarkTheme] = useState<boolean>(true);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return(
         <ThemeContext.Provider value={darkTheme}>
             <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
             </ThemeUpdateContext.Provider>
         </ThemeContext.Provider>
    )
}