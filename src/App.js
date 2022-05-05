import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Beasties from './data.json';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast.js';
import Form from 'react-bootstrap/Form';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      filteredBeasties: [],
    }
  }
  componentDidMount(){
    this.setState({filteredBeasties: Beasties});
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  
  handleOpenModal = (beastName) => {
    const selectedBeast = Beasties.find(beast => beast.title === beastName);
    this.setState({ showModal: true, selectedBeast });
  };
  
  handleChange = e => {
    e.preventDefault();
    if (e.target.value === "default"){
      this.setState({filteredBeasties: Beasties})
    }
    else {
    const stateList = Beasties.filter(amount => amount.horns === parseInt(e.target.value));
    this.setState({ filteredBeasties: stateList });
    }
  };
  
  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group controlId="bootstrapName">
              <Form.Label>Horns of Beasts</Form.Label>
              <Form.Control as="select" onChange={this.handleChange}>
                <option value="default">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One Hundred</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
        <Container className="App">
          <Header title="Beast Favorites" />
          <Main
            Beasties={this.state.filteredBeasties}
            handleOpenModal={this.handleOpenModal}
            message={"Click on your favorite Beastie"}
            />
          <SelectedBeast
            show={this.state.showModal}
            handleClose={this.handleCloseModal}
            selectedBeast={this.state.selectedBeast} />
          <Footer text="Vote Now for the best horns!" />
        </Container>
      </>
    );
  }
}

export default App;
