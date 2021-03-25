import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Start } from "./Start";

export const App = (): React.ReactElement => {
  return (
    <div>
      <Header />
      {/* <MemeGenerator apiCall={callApi} /> */}
      <Start />
      <Footer />
    </div>
  );
};

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
