import React, { Fragment } from 'react'
import './Home.scss'

import Navbar from '../Navbar/Navbar'
//import OrderNow from '../UI/OrderNow';

const Home = () => {
    return (
        <Fragment>
            <header>
                <div>
                    <Navbar />
                </div>

                <div className="home_content">
                    <h1>
                        <span>Restaurant</span> 2010
                    </h1>
                    <h3>أصالة الطعام الفلسطيني الشعبي </h3>
                    <p>
                        احتفل معنا بالنكهات الأصيلة للمطبخ فلسطيني - حمص
                        فلسطيني، مشاوي على الفحم، وشاورما بطعم لا يُنسى
                    </p>
                </div>
            </header>
        </Fragment>
    )
}

export default Home
