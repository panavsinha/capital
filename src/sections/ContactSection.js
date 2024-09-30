import React, { useState } from 'react'
import SocialLinks from './../components/social/SocialLinks';

// import { db } from '../config/firebaseConfig';
// import { addDoc, collection } from 'firebase/firestore';
import brochure from '../components/hero/assets/Brochure.pdf'

const ContactSection = () => {

    // const firebaseDB = `https://console.firebase.google.com/u/0/project/education-portal-da01c/database/education-portal-da01c-default-rtdb/data/~2F`;
    // const firebaseDB = `https://education-portal-da01c-default-rtdb.firebaseio.com`;
    // const firebaseDB = `https://education-portal-da01c-default-rtdb.firebaseio.com`;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    // const contactCollection = collection(db, "contactdata");

    const handleChange = (e) => {
        // console.log("typed!!")
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);

        const { name, value } = e.target;
        // console.log(name, value);

        // setFormData({ ..., e.target.name: e.target.value })
        // setFormData({ ...formData, name: value }) // This will always change the name key's value
        setFormData({ ...formData, [name]: value }) // This will always change the dynamic name from event key's value
        // console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // addDoc(contactCollection, {
        //     name: formData.name,
        //     email: formData.email,
        //     subject: formData.subject,
        //     message: formData.message,
        // })
        // console.log(e);

        // const { name, email, subject, message } = formData;

        // const url = `${firebaseDB}/contact_form_data.json`

        // const firebase = `https://education-portal-da01c-default-rtdb.firebaseio.com/contact.json`;

        /*
        const data = JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        })
        */

        // postData(firebase, data);
    }


    /* 
    const postData = async (endpoint, data) => {
        try {
            await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data
            })
        } catch (error) {
            console.log(error);
        }
    }

 */

    return (
        <div className="wrapper">
            <div className="container max-w-[1280px] mx-auto">
                <div className="row flex flex-col wrap lg:flex-row gap-8">
                    <div className="col lg:w-1/3 space-y-8 order-2 md:order-1">
                        <div className="row text-center md:text-left">
                            <h2 className='font-extrabold text-2xl md:text-3xl text-purple-900'>Get in touch</h2>
                            <p className='text-gray-600 text-lg'>Looking for help? Fill the form and start a new adventure.</p>
                        </div>
                        <div className="row divider">
                            <hr />
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-col gap-8 flex-wrap'>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Headquarters</h3>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="icon">🏠</div>
                                    <div>
                                        {/* <p className='text-gray-600'>Kathmandu, Nepal</p> */}
                                        {/* <a href="https://maps.app.goo.gl/4kCAaPYLTFCkg1Sp6"></a> */}
                                        <a href="https://maps.app.goo.gl/3pY5D9YzZhMu4TbXA" target='_blank' className='text-gray-600'>New Delhi, India</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Working Hours</h3>
                                </div>
                                <div className="row flex gap-4">
                                    <div className='text-gray-600'>Monday to Friday - 10:00 AM to 6:00 PM</div>
                                </div>
                            </div>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Phone</h3>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="icon">📞</div>
                                    <div className='flex flex-col gap-2'>
                                        <a href="tel:+918917320973" className='text-gray-600'>(+91) 9437437061</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Email</h3>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="icon">📧</div>
                                    <div className='flex flex-col gap-2'>
                                        <a href="mailto:capital5xclasses@gmail.com" className='text-gray-600'>capital5xclasses@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Stay Tuned</h3>
                                </div>
                                <div>
                                    <SocialLinks tele={`capital5x`} linkedin={`capital5x`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col lg:grow bg-blue-50 p-2 md:p-8 order-1 md:order-2">
                        <div className='row text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl font-bold text-purple-900'>Let's Connect</h2>
                            <p className='text-lg text-gray-600'>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                        </div>
                        <div className="form-wrapper mt-4 py-4">
                            <form action="" onSubmit={(e) => handleSubmit(e)}>
                                <div className='row flex flex-col gap-4'>
                                    <div className="row flex flex-col md:flex-row gap-4 md:gap-8">
                                        <input type="text" name="name" id="nameInput" placeholder='Your Name' className='md:w-1/2 outline-blue-200 py-4 px-8 rounded-md' value={formData.name} onChange={(e) => handleChange(e)} required />
                                        <input type="email" name="email" id="emailInput" placeholder='Your Email' className='md:w-1/2 outline-blue-200 py-4 px-8 rounded-md' value={formData.email} onChange={(e) => handleChange(e)} required />
                                    </div>
                                    <div className="row">
                                        <input type="text" name="subject" id="subjectInput" placeholder='Subject' className='w-full outline-blue-200 py-4 px-8 rounded-md' value={formData.subject} onChange={(e) => handleChange(e)} required />
                                    </div>
                                    <div className="row">
                                        <textarea name="message" id="messageInput" rows="8" placeholder='How can we help?' className='w-full max-h-[20rem] outline-blue-200 py-4 px-8 rounded-md' onChange={(e) => handleChange(e)} required>{formData.message}</textarea>
                                    </div>
                                    <div className="row">
                                        <button type="submit" className='bg-purple-800 hover:bg-purple-900 text-white font-semibold px-6 py-3 rounded-full'>Send Message</button>&nbsp;
                                        <a href={brochure} download="Capital 5X Brochure"><button className='bg-purple-800 hover:bg-purple-900 text-white font-semibold px-6 py-3 rounded-full'>Download Brochure</button></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection