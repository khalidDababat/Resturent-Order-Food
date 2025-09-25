import React from 'react'
import './App.css'

import HomePage from './Components/HomePage/Home'
import PopularFoods from './Components/PopularFoods/PopularFoods'
import AboutRestaurant from './Components/AboutRestaurant/AboutRestaurant'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'

function App() {
    return (
        <div className="App">
            <HomePage />
            <PopularFoods />
            <AboutRestaurant />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default App
