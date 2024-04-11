import React, { useRef } from 'react'
import First_section from './landing/First_section';
import Second_section from './landing/Second_section';
import Third_section from './landing/Third_section';
import Fourth_section from './landing/Fourth_section';
import Fifth_section from './landing/Fifth_section';
import Sixth_section from './landing/Sixth_section';
import Seventh_section from './landing/Seventh_section';
import Eight_section from './landing/Eight_section';
import Nineth_section from './landing/Nineth_section';
import Tenth_section from './landing/Tenth_section';
import Footer from './component/Footer';
import { LandingContext } from './Context';

function Landing_page() {
    let homeRef = useRef(null);
    let blogRef = useRef(null);
    let contactRef = useRef(null);
    let aboutRef = useRef(null);
  return (
    <div> 
        <LandingContext.Provider value={{homeRef, blogRef, contactRef, aboutRef}}>
            {/* <First_section /> */}
            <Second_section />
            <Third_section />
            <Fourth_section />
            <Fifth_section />
            <Sixth_section />
            <Seventh_section />
            <Eight_section />
            <Nineth_section />
            <Tenth_section />
            <Footer />

        </LandingContext.Provider>
    </div>
  )
}

export default Landing_page