import React from "react";
import HornedBeast from './HornedBeast';
import BeastImage from './BeastImage';

class Main extends React.Component  {
    render() {
        return(
            <>
            <h2>{this.props.message}</h2>
            <BeastImage image={this.props.imageURLs[0].image_url}/>
            <BeastImage image={this.props.imageURLs[1].image_url}/>
            <BeastImage image={this.props.imageURLs[2].image_url}/>
            <BeastImage image={this.props.imageURLs[3].image_url}/>
            <BeastImage image={this.props.imageURLs[4].image_url}/>
            <BeastImage image={this.props.imageURLs[5].image_url}/>
            <BeastImage image={this.props.imageURLs[6].image_url}/>
            <BeastImage image={this.props.imageURLs[7].image_url}/>
            <BeastImage image={this.props.imageURLs[8].image_url}/>
            <BeastImage image={this.props.imageURLs[9].image_url}/>
            <BeastImage image={this.props.imageURLs[10].image_url}/>
            <BeastImage image={this.props.imageURLs[11].image_url}/>
            <BeastImage image={this.props.imageURLs[12].image_url}/>
            <BeastImage image={this.props.imageURLs[13].image_url}/>
            <BeastImage image={this.props.imageURLs[14].image_url}/>
            <BeastImage image={this.props.imageURLs[15].image_url}/>
            <BeastImage image={this.props.imageURLs[16].image_url}/>
            <BeastImage image={this.props.imageURLs[17].image_url}/>
            <BeastImage image={this.props.imageURLs[18].image_url}/>
            <BeastImage image={this.props.imageURLs[19].image_url}/>
            <></>
            <HornedBeast title={'Buffalo'} src={'https://cdn.pixabay.com/photo/2018/09/16/15/51/bison-3681737_1280.jpg'} description={'Majestic Buffalo in the prairie.'} />
            <HornedBeast title={'Baby Rhino'} src={'https://cdn.pixabay.com/photo/2014/07/23/15/57/rhino-400268_1280.jpg'}description={'Cute Rhino baby kissing a rock.'} />
            <HornedBeast title={'Goat'} src={'https://p1.pxfuel.com/preview/578/973/197/goat-horns-mammals-animal-billy-goat-bart.jpg'}description={'Mischief in the making, how about a goat!'} />
            </>
        )
    }
}

export default Main;