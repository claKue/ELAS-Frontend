import React from 'react';
import '../../Intogen.css'
import Cards from '../Cards';
import Intro from '../Intro'
import Footer from '../Footer'


function Home() {
    return (
        <>
            <hr class="border2" data-content="Home"/>
            <Intro />
            <div className="Kolbstitle">
                <h1>Learn more about Kolb's learning styles:</h1>
            </div>
            <Cards />
            <Footer />
           
        </>
    )
}

export default Home;