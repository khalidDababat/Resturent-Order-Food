import React from 'react'
import './AboutRestaurant.scss'

import { MdOutlineAutoFixHigh } from 'react-icons/md'
import { PiCampfireFill } from 'react-icons/pi'
import { IoMdPeople } from 'react-icons/io'
import { RiSpeedUpLine } from 'react-icons/ri'
const AboutRestaurant = () => {
    return (
        <div id="container_about" className="container_about">
            <div className="title">
                <h1>عن مطعم 2010</h1>
                <p>
                    منذ عام 2010، تقدم أصيل المأكولات الفلسطينية الشعبية بطعم
                    أصيل ونكهة لا تُنسى
                </p>
            </div>

            {/* Information about mock data Restaurant 2010 */}
            <div className="info">
                <div className="item">
                    <div className="logo">
                        <PiCampfireFill />
                    </div>

                    <h5>شوي على الفحم</h5>
                    <p>نستخدم الفحم الطبيعي لإعطاء الطعام نكهة مميزة أصيلة</p>
                </div>
                <div className="item">
                    <div className="logo">
                        <MdOutlineAutoFixHigh />
                    </div>
                    <h5>جودة عالية</h5>
                    <p>نختار أفضل المكونات الطازجة لضمان أفضل طعم ونكهة</p>
                </div>
                <div className="item">
                    <div className="logo">
                        <IoMdPeople />
                    </div>
                    <h5>خدمة مميزة</h5>
                    <p>فريق عمل محترف يقدم خدمة سريعة وودودة لجميع العملاء</p>
                </div>
                <div className="item">
                    <div className="logo">
                        <RiSpeedUpLine />
                    </div>
                    <h5>سرعة في التحضير</h5>
                    <p>نحضر طلبك بسرعة دون التنازل عن الجودة والطعم الأصيل</p>
                </div>
            </div>

            <div className="story">
                <div className="story_info">
                    <div className="element">
                        <h2>50+</h2>
                        <p>صنف مختلف</p>
                    </div>
                    <div className="element">
                        <h2>15+</h2>
                        <p>سنة خبرة</p>
                    </div>
                    <div className="element">
                        <h2>24/7</h2>
                        <p>خدمة متاحة</p>
                    </div>
                    <div className="element">
                        <h2>1000+</h2>
                        <p>عميل راضي</p>
                    </div>
                </div>

                <div className="story_paragraph">
                    <h2>قصتنا</h2>
                    <p>
                        بدأت قصة مطعم 2010 برؤية بسيطة: تقديم أفضل المأكولات
                        الفلسطينية الشعبية بسرعة أصيلة بطعم لا تُنسى. نحن نؤمن
                        بأن الطعام ليس فقط وجبة، بل تجربة ثقافية تربطنا بتراثنا
                        وذكرياتنا الجميلة. كل طبق في مطعمنا يُحضر بحب وعناية،
                        باستخدام الوصفات التقليدية التي تم توارثها عبر الأجيال،
                        مع لمسة عصرية في الخدمة والتقديم.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutRestaurant
