import React, { Fragment } from 'react'
import './PopularFoods.scss'
import Humus from '../../assets/images/bubimag1.jpg'
import falafels from '../../assets/images/bubimg2.jpg'
import meet from '../../assets/images/bubimg3.png'

import PopularFoodsItem from './PopularFoodsItem'
const PopularFoods = () => {
    
    const PupilarFood = [
        {
            id: 1,
            title: 'حمص',
            image: Humus,
            description: 'حمص طازج مع زيت زيتون وطحينة — طبق تقليدي شهي.',
        },
        {
            id: 2,
            title: 'فلافل',
            image: falafels,
            description:
                'فلافل مقرمشة من حمص مطحون ومقلية على الطريقة التقليدية.',
        },
        {
            id: 3,
            title: 'شاورما',
            image: meet,
            description:
                'شاورما لحم متبلة ومشوية، تُقدّم مع صوص خاص وخبز طازج.',
        },
    ]
    return (
        <Fragment>
            <div className="container">
                <div className="title_part">
                    <h1>اشهر خدماتنا </h1>
                </div>
                
                <div className="PopularFoods">
                    {
                        PupilarFood.map(item =>(
                           <PopularFoodsItem 
                               key={item.id}
                               title={item.title}
                               image={item.image} 
                              
                           />
                        ))
                    }
                       
                   
                </div>
            </div>
        </Fragment>
    )
}

export default PopularFoods
