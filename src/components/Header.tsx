import * as React from 'react'
import {useTheme,useThemeUpdate} from './ThemeContext'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


export const Header = ():React.ReactElement => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#2a0845' : '#6441a5',
    }

    const foreColorStyle ={
        color:darkTheme ? '#CECECE' : '#FFFFFF',
    }

    return (
        <header style={themeStyles}>
            <img
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?"
            />
            <p style={foreColorStyle}>Meme Generator</p>

            <BootstrapSwitchButton
                checked={false}
                onlabel='Light' onstyle={'light'}
                offlabel='Dark' offstyle={'dark'}
                onChange={toggleTheme}
            />
        </header>
    )
}