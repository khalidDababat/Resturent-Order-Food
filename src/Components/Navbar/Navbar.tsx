import React ,{useState} from 'react'
import './Navbar.scss'
import Logo from '../../assets/images/Logo.jpg'
import { RiShoppingCart2Fill } from 'react-icons/ri'

const Navbar = () => { 


    const [counterBuy ,setCounterBuy] = useState<number>(2);
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h3>
                    {' '}
                    <span>Restaurant</span>2010
                </h3>
            </div>

            <div className="nav-links">
                <ul>
                    <li>
                        <a href="/">التواصل</a>
                    </li>
                    <li>
                        <a href="/">عن المطعم</a>
                    </li>
                    <li>
                        <a href="/">القائمة</a>
                    </li>
                    <li>
                        <a href="/">الرئيسية</a>
                    </li>
                </ul>
              
                
                <button>
                    Order Now 
                    
                         <RiShoppingCart2Fill /> <span>{counterBuy}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
