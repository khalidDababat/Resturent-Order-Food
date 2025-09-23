import React from 'react'
import './AboutRestaurant.scss'

const AboutRestaurant = () => {
    return (
        <div className="container ">
            <div className="title">
                <h1>عن مطعم 2010</h1>
                <p>
                    منذ عام 2010، نقدم أطيب المأكولات الفلسطينية الشعبية بطعم
                    أصيل ونكهة لا تُنسى
                </p>
            </div>
            {/* Information about food Restaurant */}
            <div className="info">
                <div className="item1"></div>
            </div>
        </div>
    )
}

export default AboutRestaurant
