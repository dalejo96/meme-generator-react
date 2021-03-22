import React, { useState } from "react"
import { callApi } from "../../services/DataImages"
import { Footer } from "./Footer"
import {FunctionalComponent} from "./FunctionalComponent"
import { Header } from "./Header"
import { MemeGenerator } from "./MemeGenerator"
import {ThemeProvider} from './ThemeContext'

export const App1= ():React.ReactElement => {
    return (
        <ThemeProvider>
            <Header />
            <FunctionalComponent/>
            <MemeGenerator apiCall={callApi} />
            <Footer />
        </ThemeProvider>
    )
}