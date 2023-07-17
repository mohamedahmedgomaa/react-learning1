import React, {Component} from "react";
import '../App.css';
import Header from './Header';
import Text from './Text';
import Social from './Social';

class App extends Component {
  render() {
    return (
       <div className="container">
         <Header/>
         <Text/>
         <Social/>
       </div>
    );
  }
}

export default App;
