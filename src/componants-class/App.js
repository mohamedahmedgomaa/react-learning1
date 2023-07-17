import React, {Component} from "react";
import '../App.css';
import File from "./File"

class App extends Component {
    render() {
        return (
            <div className="container">
                <File name="Mohamed" name2="Ahmed"/>
                <File name="Gomaa" name2="Ahmed"/>
                <File name="Negm" name2="Gomaa"/>
            </div>
        );
    }
}

export default App;
