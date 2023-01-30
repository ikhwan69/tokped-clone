import React from 'react'
import HeroesSlider from '../Heroes/HeroesSlider'
import Head from './Head'
import Navbar from './Navbar'

const Header = () => {
    return (
        <section>
            <Navbar />
            <div className="md:py-36 py-24">
                <HeroesSlider />
            </div>
        </section>
    )
}

export default Header