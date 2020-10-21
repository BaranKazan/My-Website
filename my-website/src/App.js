import React, {Component} from 'react';
import NavBar from './Components/NavBar';
import MainPage from "./Components/MainPage";

class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar/>
        <MainPage/>
      </div>

    );
  }
}

export default App;
