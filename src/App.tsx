import React from 'react'
import './App.css'

import HomePage from './Components/HomePage/Home'
import PopularFoods from './Components/PopularFoods/PopularFoods'
import AboutRestaurant from './Components/AboutRestaurant/AboutRestaurant'
import ContactUs from './Components/ContactUs/ContactUs'

function App() {
    return (
        <div className="App">
            <HomePage />
            <PopularFoods />
            <AboutRestaurant />
            <ContactUs />
        </div>
    )
}

export default App
