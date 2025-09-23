import React from 'react'
import './App.css'

import HomePage from './Components/HomePage/Home'
import PopularFoods from './Components/PopularFoods/PopularFoods'
//import AboutRestaurant from './Components/AboutRestaurant'
function App() {
    return (
        <div className="App">
            <HomePage />
            <PopularFoods />
        </div>
    )
}

export default App
