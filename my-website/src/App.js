import React, {Component} from 'react';
import NavBar from './Components/NavBar';
import MainPage from "./Components/MainPage";

class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar/>
        <MainPage/>
        <script src="../js/main.js" type='text/javascript'/>
      </div>

    );
  }
}

export default App;
