import React, {Component} from "react";

class File extends Component {

    method() {
        return <h4>Ahmed</h4>
    }
    method2(name) {
        return <h4>{name}</h4>
    }

    render() {
        // const name = "Moha";
        // const name2 = this.method2('name');
        // const name3 = this.method();

        return (
            <div className="container">
                <h2>Test {this.props.name} - {this.props.name2}</h2>
             </div>
        );
    }
}

export default File;
