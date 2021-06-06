import React from 'react';
import '../../Intogen.css'
import Cards from '../Cards';
import Intro from '../Intro'
import Footer from '../Footer'


function Home() {
    return (
        <>
            <hr class="border2" data-content="Home"/>
            <span className="subTitle">Welcome to <b>Intogen </b></span><br/>
            <Intro />
            <Cards />
            <Footer /> 
        </>
    )
}

export default Home;