import React,{ useContext} from 'react'
import {useTheme,useThemeUpdate} from './ThemeContext'



export const FunctionalComponent = ():React.ReactElement  =>  {

    const darkTheme = useTheme();

    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return(

        <div style={themeStyles}> 
            
            Welcome to the meme generator!
        </div>
    )
}