import React from 'react'
import './Footer.scss'

import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { TbClockHour10 } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className="container_footer">
            <div className="Up_footer">
                <div className="first">
                    <h1>روابط سريعة</h1>
                    <div className="quick_reference">
                        <a href="">الرئيسية</a>
                        <a href="">القائمة</a>
                        <a href="">عن المطعم</a>
                        <a href="">تواصل</a>
                    </div>
                </div>
                <div className="second">
                    <h1>الموقع وأوقات العمل</h1>
                    <p>
                        <FaLocationDot /> طوباس -الشارع الرئيسي - بجانب كازية
                        ابو خضر للمحروقات
                    </p>
                    <p>
                        <TbClockHour10 /> يوميا من 8:00 صباحا حتى 12:00 منتصف
                        الليل
                    </p>
                </div>

                <div className="third">
                    <h1>مطعم 2010</h1>
                    <p>
                        منذ عام 2010، نقدم أطيب المأكولات الفلسطينية الشعبية
                        بطعم أصيل ونكهة لا تُنسى
                    </p>
                    <div className="phone_email">
                        <a href="tel:+972568800473">
                            <FaPhoneAlt />
                            <span>+972 56-880-0473</span>
                        </a>
                        <a href="mailto:wink-appointed@hotmail.com">
                            <MdEmail />
                            wink-appointed@hotmail.com
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="down_footer">
                © {new Date().getFullYear()} مطعم 2010. جميع الحقوق محفوظة.
            </div>
        </div>
    )
}

export default Footer
