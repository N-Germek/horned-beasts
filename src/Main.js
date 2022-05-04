import React from "react";
import BeastImage from './BeastImage';
import { Col, Row } from "react-bootstrap";

class Main extends React.Component  {
    render() {  
        return(
            <>
            <h2>{this.props.message}</h2>
            <Row sm={2} md={3} lg={4}>
            {this.props.BeasttImage.map(oneBeast => (
                <Col>
                <BeastImage
                key={oneBeast._id}
                image={oneBeast.image_url}
                title={oneBeast.title}
                description={oneBeast.description}
                keyword={oneBeast.keyword}
                horns={oneBeast.horns}
                handleOpenModal={this.props.handleOpenModal}
                />
                </Col>
            ))}
            </Row>
            </>
        )
    }
}

export default Main;