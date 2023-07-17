import React, {Component} from "react";
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { answer: 'Yes'}
    }
    render() {
        return (
            <div className="container">
                <h1>Do ypu live my ? { this.state.answer}</h1>
            </div>
        );
    }
}

export default App;
