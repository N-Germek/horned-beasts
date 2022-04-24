import React from "react";
import HornedBeast from './HornedBeast';

class Main extends React.Component  {
    render() {
        return(
            <>
            <></>
            <HornedBeast title={'Buffalo'} description={'Majestic Buffalo in the prairie.'} />
            <HornedBeast title={'Baby Rhino'} description={'Cute Rhino baby kissing a rock.'} />
            <HornedBeast title={'Goat'} description={'Mischief in the making, how about a goat!'} />
            </>
        )
    }
}

export default Main;