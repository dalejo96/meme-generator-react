import * as React from "react"
import {Header} from "./Header"
import {MemeGenerator} from "./MemeGenerator"
import {Footer} from "./Footer"

/* export class App extends React.Component<IProps,any>{
    render(){
        return <h1 className="display-4">Hello {this.props.name}</h1>
    }
}

export const App = ({ name }: IProps) => {
    return <h1 className="display-4">Hello {name}</h1>
}

interface IProps{
    name:string,
} 

*/

export const App = () =>{
    return (
        <div>
            <Header />
            <MemeGenerator />
            <Footer />
        </div>
    )
}

