import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Beasties from './data.json';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

handleCloseModal = () => {
  this.setState({ showModal:false });
};

handleOpenModal = () => {
  this.setState({ showModal: true });
};

  render() {
    return (
      <Container className="App">
       <Header title="Beast Favorites"/>
       <Main 
       Beasties={Beasties} 
       handleOpenModal={this.handleOpenModal}
       message={"Click on your favorite Beastie"}
       />
       <SelectedBeast 
       show={this.state.showModal} 
       handleClose={this.handleCloseModal} />
       <Footer text="Vote Now for the best horns!"/>
      </Container>
    );
  }
}

export default App;
