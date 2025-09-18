import React, { Fragment } from 'react'
import './PopularFoods.scss'
import Humus from '../../assets/images/bubimag1.jpg'
import falafels from '../../assets/images/bubimg2.jpg'
import meet from '../../assets/images/bubimg3.png'

const PopularFoods = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="title_part">
                    <h1>اشهر خدماتنا </h1>
                </div>
                <div className="PopularFoods">
                    <div className="item_food">
                        <img className="rounded-md" src={Humus} alt="Humus" />
                        <div className="title">حمص</div>
                    </div>
                    <div className="item_food">
                        <img src={falafels} alt="falafels" />
                        <div className="title">فلافل</div>
                    </div>
                    <div className="item_food">
                        <img src={meet} alt="meet" />
                        <div className="title">شاورما</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PopularFoods
