import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
class BeastImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Will you vote for me?",
            favoriteVotes: "💞"
        }
    }

    handleClick = () => {
        this.setState({ favoriteVotes: this.state.favoriteVotes + "💞", status: "🫶Thank's for your vote!🫶" });
    }

    render() {
        return (
            <Card style={{ width: '18rem' }} className="h-100">
                <Container>
                    <Card.Img src={this.props.image} alt={this.props.description} title={this.props.title} />
                    <Button onClick={this.handleClick}>Pick Me for your favorite!</Button>
                    <Button onClick={() => this.props.handleOpenModal(this.props.title)}>Click to meet me!</Button>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            {this.state.favoriteVotes}
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleClick}>{this.state.status}</Button>
                    </Card.Body>
                    {/* <h2>{this.state.status}</h2> */}
                </Container>
            </Card>
        )
    }
}

export default BeastImage;