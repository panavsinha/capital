import React from 'react'
import { HiAcademicCap } from "react-icons/hi"
import brochure from '../../components/hero/assets/Brochure.pdf'
import { Link, NavLink } from 'react-router-dom'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className='rounded-xl bg-blue-50 px-4 py-10 w-full md:w-[90%] lg:w-[90%] flex flex-col justify-center gap-4'>
            <div className="icon text-blue-700 text-6xl">{icon}
            <div className="title">
                <h2 className="font-bold text-2xl">{title}</h2>
                </div>
            </div>
            <div className="description">
                <p className="text-lg text-justify">{description}</p>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <>
            <div className="features-wrapper">
                <div className="container max-w-[1280px] mx-auto flex flex-col gap-[4rem]">
                    <div className="row text-center">
                        <h2 className='font-bold text-3xl'>About us</h2>
                        <p className='text-lg'>Our team is driven and reliable, working tirelessly to reach our goals together. Through our journey, we've learned valuable lessons and made
                            mistakes that have shaped our approach. We’re committed to guiding you with the insights we've gained, so you avoid the same errors. With us,
                            you won’t just memorize information—you’ll gain a clear understanding through repeated practice and dedicated time, truly grasping the path to
                            learning. Trust us to be by your side every step of the way.</p>
                    </div>
                    <div className="row boxes flex gap-6 flex-wrap justify-center">
                        <FeatureCard icon={<HiAcademicCap />} title="Why choose us?"
                            description=
                                <ul>
                                <li><b>Comprehensive Curriculum:</b> Our courses are designed to cover all essential topics, ensuring you gain the knowledge and skills you need.</li>
                                <li><b>Affordable Fees:</b> Quality education at a cost-effective price, with early registration discounts.</li>
                                <li><b>Personalized Support:</b> Our dedicated team provides guidance and mentorship to help you achieve your learning goals and also
                                    guide you about different career options regarding stock market.</li> 
                                <li><b>Trial Classes Available:</b> With trail classes, experience the process first and then join with confidence.</li>
                                <li><b>Transparency on Stock Market Taboo:</b> We clear misconceptions about the stock market by providing honest
                                    understanding, breaking down the myths often associated with it.</li>
                                <li><b>Doubt Sessions:</b> We offer doubt-clearing sessions during non-class hours to ensure you fully
                                    understand the concepts. We will also answer your questions through texts for a better practical
                                    approach. </li>
                                <li><b>Virtual Trading Account:</b> Practice risk-free with our virtual trading account. Gain confidence and refine your skills in a
                                    simulated environment before trading with real money that will help you manage your risk.</li> 
                                </ul>
                                    />
                        <div className="buttons flex gap-4">
                            {/* <Button>Learn More</Button> */}
                            <button className="bg-blue-900 text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-all ease-in-out duration-300 cursor-pointer"><NavLink to="/contact">Learn More</NavLink></button>
                            <a href={brochure} download="Capital 5X Brochure"><button className="bg-blue-900 text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-all ease-in-out duration-300 cursor-pointer">Download Brochure</button></a>
                            {/* <button className="bg-yellow-500 text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-all ease-in-out duration-300 cursor-pointer">Visit Courses</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features