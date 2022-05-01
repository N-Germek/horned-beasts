import React from "react";
import BeastImage from './BeastImage';
import { Col, Row } from "react-bootstrap";

class Main extends React.Component  {
    render() {
        return(
            <>
            <h2>{this.props.message}</h2>
            <Row sm={2} md={3} lg={4}>
            {this.props.imageURLs.map(beastPics => (
                <Col>
                <BeastImage
                image={beastPics.image_url}
                title={beastPics.title}
                description={beastPics.description}
                keyword={beastPics.keyword}
                horns={beastPics.horns}
                key={beastPics._id}
                />
                </Col>
            ))}
            </Row>
            </>
        )
    }
}

export default Main;