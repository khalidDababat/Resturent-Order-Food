import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <h1>أرسل لنا رسالة </h1>
            <form action="">
                <div className="firstName_lastName">
                    <input type="text" placeholder="الاسم الأول" />
                    <input type="text" placeholder="الاسم الأخير" />
                </div>
                <div>
                    <input type="text" placeholder="رقم الهاتف" />
                </div>
                <div>
                    <input type="text" placeholder="البريد الإلكتروني" />
                </div>

                <textarea
                    name=""
                    rows={5}
                    cols={50}
                    placeholder="رسالتك هنا..."
                ></textarea>
                <br />
                <button>إرسال الرسالة</button>
            </form>
        </div>
    )
}

export default ContactForm
