import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from './data.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Header title="Beast Favorites"/>
       <Main 
       imageURLs={imageURLs}
       message={"Click on your favorite Beastie"}
       />
       <Footer text="Vote Now for the best horns!"/>
      </div>
    );
  }
}

export default App;
