import React from 'react';
import Common from './Common';
import web1 from '../../src/imges/home.png'


const Home = () => {
    return (
        <>
       <Common name="Learn Frontend technologies with" imgSrc={web1} btnName="Get Started" visit="/service" />
        </>
    )
}

export default Home;