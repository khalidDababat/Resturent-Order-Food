import React from 'react'
import './ContactUs.scss'

import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { TbClockHour10 } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'

import ContactForm from './ContactForm'

const ContactUs = () => {
    const infoRestaurant = [
        {
            id: 1,
            logo: <FaPhoneAlt />,
            title: 'رقم الهاتف',
            description: '+972 56-880-0473',
        },
        {
            id: 2,
            logo: <FaLocationDot />,
            title: 'العنوان',
            description:
                ' طوباس - الشارع الرئيسي - بجانب محطة ابو خضر للمحروقات',
        },
        {
            id: 3,
            logo: <TbClockHour10 />,
            title: 'ساعات العمل',
            description: 'يوميا من 8:00 صباحا حتى 12:00 منتصف الليل',
        },
        {
            id: 4,
            logo: <MdEmail />,
            title: 'البريد الإلكتروني',
            description: 'wink-appointed@hotmail.com',
        },
    ]

    return (
        <div id="container_contactUS" className="container_contactUS">
            <div className="title">
                <h1>تواصل معنا</h1>
                <p>
                    نحن هنا لخدمتك في أي وقت. تواصل معنا أو قم بزيارتنا في
                    مطعم
                </p>
            </div>

            <div className="content">
                <div className="contactUs">
                    <ContactForm />
                </div>

                <div className="infoPlace">
                    {infoRestaurant.map((item) => (
                        <div key={item.id}>
                            <div className="img">{item.logo}</div>
                            <div className="contain">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs
