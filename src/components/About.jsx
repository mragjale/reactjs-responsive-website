import React from 'react';
import Common from './Common';
import web from '../../src/imges/property-manager.svg'

const About = () => {
    return (
        <>
            <Common name="Welcome to About Page of" imgSrc={web} btnName="Contact Now" visit="/contact" />
        </>
    )
}

export default About;