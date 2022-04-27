import React from "react";
import HornedBeast from './HornedBeast';

class Main extends React.Component  {
    render() {
        return(
            <>
            <></>
            <HornedBeast title={'Buffalo'} src={'https://cdn.pixabay.com/photo/2018/09/16/15/51/bison-3681737_1280.jpg'} description={'Majestic Buffalo in the prairie.'} />
            <HornedBeast title={'Baby Rhino'} src={'https://cdn.pixabay.com/photo/2014/07/23/15/57/rhino-400268_1280.jpg'}description={'Cute Rhino baby kissing a rock.'} />
            <HornedBeast title={'Goat'} src={'https://p1.pxfuel.com/preview/578/973/197/goat-horns-mammals-animal-billy-goat-bart.jpg'}description={'Mischief in the making, how about a goat!'} />
            </>
        )
    }
}

export default Main;