import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
class BeastImage extends React.Component  {
   constructor(props) {
       super(props);
       this.state = {
           status: "Will you vote for me?"
           favoriteVotes: 0
       }
   } 
    
   favoriteClicks = () => {
       this.setState({favoriteVotes.this.state.favoriteVotes});
   }

   handleClick = () => {
       if (this.state.status === "🫶Thank's for your vote!🫶") {
           this.setState({ status: "Will you vote for me?" });
       } else {
           this.setState({ status: "🫶Thank's for your vote!🫶"});
       }
    
   } 

    render() {
        return(
            <Container>
            <Image src={this.props.image} alt="Many Beasties!"
            onClick={this.handleClick}
            />
            <h2>{this.state.status}</h2>
            </Container>
        )
    }
}

export default BeastImage;