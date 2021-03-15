import * as React from "react"
//import "bootstrap/dist/css/bootstrap.min.css";

export class App extends React.Component<IProps,any>{
    render(){
        return <h1 className="display-4">Hello {this.props.name}</h1>
    }
}

interface IProps{
    name:string,
}