import React from 'react';
import Nav from './Nav/Nav';
import './Home.css'
import FirstSec from './First_sec/FirstSec';
import SecondSec from './SecondSec/SecondSec';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './Fourth/FourthSection';
import FifthSection from './Fifth/FifthSection';
import SixthSection from './Sixth/SixthSection';
import Footer from './Footer/Footer';

function Home() {
    return (
        <div className='Home'>
            <Nav />
            <FirstSec />
            <SecondSec />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <Footer />
        </div>
    )
}

export default Home