import React, { Fragment } from 'react'
import './Home.scss'

import Navbar from '../Navbar/Navbar'

const Home = () => {
    return (
        <Fragment>
            <header>
                <div>
                    <Navbar />
                </div>

                <div className="home_content ">
                    <h1>
                        <span>Restaurant</span> 2010
                    </h1>
                    <h3>أصالة الطعام الفلسطيني الشعبية </h3>
                    <p>
                        احتفل معنا بالنكهات الأصيلة للمطبخ فلسطيني - حمص
                        فلسطيني، مشاوي على الفحم، شاورما بطعم لا تُنسى
                    </p>
                    <button>القائمة </button>
                </div>
            </header>
        </Fragment>
    )
}

export default Home
