import React, { Component } from 'react';
import NavigationContainer from './components/Navigation/NavigationContainer/NavigationContainer';
import MainHeader from './components/MainHeader/MainHeader';
import TextWithImage from './components/TextWithImage/TextWithImage';


class App extends Component {

  render() {

    return (

      <div className="App">

        <NavigationContainer />
        <MainHeader />

        <TextWithImage 
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          imageSource={"http://via.placeholder.com/250"} 
        />

      </div>

    );
  }
}

export default App;
