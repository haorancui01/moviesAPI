import React from "react";
import Hero from "../hero/Hero";

const Home = ({movies}) => {

    if(!movies){
        return null;
    }

    return (
        <div>
            <Hero movies={movies}></Hero>
        </div>
    )
}

export default Home;
