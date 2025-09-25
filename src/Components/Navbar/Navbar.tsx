import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../assets/images/Logo.jpg'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { MdOutlineLocalPhone } from 'react-icons/md'

const Navbar = () => {
    const [counterBuy, setCounterBuy] = useState<number>(2)
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h3>
                    <span>Restaurant</span>2010
                </h3>
                <h5>
                    <MdOutlineLocalPhone /> +972 56-880-0473
                </h5>
            </div>

            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#container_contactUS">تواصل معنا</a>
                    </li>
                    <li>
                        <a href="#container_about">عن المطعم</a>
                    </li>
                    <li>
                        <a href="/">القائمة</a>
                    </li>
                    <li>
                        <a href="/">الرئيسية</a>
                    </li>
                </ul>

                <button>
                    اطلب الأن
                    <span> {counterBuy}</span>
                    <RiShoppingCart2Fill />
                </button>
            </div>
        </div>
    )
}

export default Navbar
