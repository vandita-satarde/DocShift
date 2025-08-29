import React, { useState } from 'react'
import axios from "axios"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import image1 from '../assets/images/contact-1.png'
import image2 from '../assets/images/contact-2.png'

function ContactUs() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullName.trim()) {
            alert("Please enter your full name.");
            return;
        }

        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!formData.message.trim()) {
            alert("Please enter a message.");
            return;
        }

            try {
                const res = await axios.post("http://localhost:5000/api/contacts", formData)
                alert(res.data.message);
                setFormData({ fullName: "", email: "", message: "" })
            } catch (err) {
                console.error(err);
                alert("Failed to send message!");
            }
        }

        return (
            <>
                <Navbar />
                <div className='relative flex flex-col sm:flex-row md:flex-row justify-between gap-y-14 p-8 md:p-30 mt-19 md:mt-4.5 bg-[#E4EBFF] text-[#0E1836] '>
                    <img src={image2} className='absolute top-5 lg:-top-20 -right-25 lg:right-130 w-45 lg:w-100 ' />
                    <img src={image2} className='absolute bottom-55 lg:-bottom-60 -left-35 lg:left-50 w-60 lg:w-140 ' />
                    <div className='mt-5 md:mt-20 pl-6 z-10 '>
                        <p className='text-[25px] md:text-[45px] '>Lets Get in <span className='font-[700] '>Touch!</span></p>
                        <p className='text-[#1A1A1A] text-[11px] md:text-[13px] md:leading-5 '>Have a question or need assistance? Reach<br /> out to us via email,
                            phone, or the contact form<br /> below. We're eager to assist you.</p>
                        <p className='text-[#656ED3] text-[10px] md:text-[13px] font-semibold mt-2'>Nice hearing from you!</p>

                    </div>
                    <div className='z-10 bg-[#F5F9FE] text-[13px] md:text-[17.5px] rounded-2xl space-y-2 md:space-y-4 p-5 md:p-12 md:w-130 md:h-141 '>
                        <p>Full Name:</p>
                        <input
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleChange}
                            className='w-full h-8 md:h-13 border rounded-4xl md:-mt-3 pl-3 '
                            required
                        />
                        <p>Email:</p>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full h-8 md:h-13 border rounded-4xl md:-mt-3 pl-3'
                            required
                        />
                        <p>Message:</p>
                        <input
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='w-full h-20 md:h-40 border rounded-2xl md:-mt-3 pl-3'
                            required
                        />
                        <div className='text-end '>
                            <button onClick={handleSubmit} className='bg-[#323232] hover:bg-[#212121] text-white mt-1 md:mt-5 w-[90px] md:w-[160px] h-[32px] md:h-[43px] rounded-lg cursor-pointer ' >Submit</button>
                        </div>
                    </div>
                </div>
                <Footer className='z-20 relative'/>
            </>
        )
    }

    export default ContactUs
