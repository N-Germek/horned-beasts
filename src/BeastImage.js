import React from "react";

class BeastImage extends React.Component  {
    render() {
        return(
            <>
            <img src={this.props.image} alt="Many Beasties!"/>
            </>
        )
    }
}

export default BeastImage;