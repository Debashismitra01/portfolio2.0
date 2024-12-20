"use client";
import React, { useState, FormEvent } from "react";
import './contact.css';

export default function Contact() {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "470d0380-e9fc-45f4-8179-5c838f57ffee");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.currentTarget.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setResult("Something went wrong. Please try again.");
        }

        console.log(result);
    };

    return (
        <div className="contact" id="contact">
            <div className="contact_title">
                <h1>Contact Me</h1>
                <img src="/theme_pattern.svg" alt="theme_pattern" />
            </div>
            <div className="contactsection">
                <div className="leftcontainer">
                    <h2>Let's connect</h2>
                    <p>I am available for freelance projects, open to contributing to open-source initiatives, and ready to take on new work opportunities. Let's collaborate and create something amazing! Feel free to reach out for any projects or contributions.</p>
                    <div className="contactdetails">
                        <div className="contactdetail"><img src="/mail_icon.svg" alt="Mail Icon" /><p>mdebashis268@gmail.com</p></div>
                        <div className="contactdetail"><img src="/call_icon.svg" alt="Call Icon" /><p>+919641978383</p></div>
                        <div className="contactdetail"><img src="/location_icon.svg" alt="Location Icon" /><p>Kolkata, IN700110</p></div>
                    </div>
                </div>
                <form className="rightcontainer" onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" id="name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" id="email" required />
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" rows={8} placeholder="Enter your message" id="message" required></textarea>
                    <button type="submit" className="contactsubmit">Submit now</button>
                </form>
            </div>
        </div>
    );
}
