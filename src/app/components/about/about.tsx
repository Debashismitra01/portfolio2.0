import React from "react";
import './about.css';
import Link from "next/link";
import Image from "next/image"; 

export default function AboutMe() {
    return (
        <div className="about" id="about"> 
            <div className="about_title">
                <h1>About Me</h1>
                <img src="/theme_pattern.svg" alt="theme_pattern" />
            </div>
            <div className="aboutsection">
                <div className="about-img">.</div>
                <div className="about-text">
                    <h2><span>I am Debashis Mitra, a fullstack developer and web designer</span> </h2>
            <p>I was introduced to HTML at 4th standard and then the love for web development kept thriving.</p>
            <p>I am fluent in <span >C++, JavaScript, Java </span>.</p> 
            <p>My fields of interest are building experiences with <span >Web Technology</span> and also in areas related to <span >Cloud Computing</span>.</p>    
            <p>I am in a continuous learning curve of <span >Python</span>.</p>   
            <p>I specialize in both frontend and backend development, with expertise in 
                <span > React.js</span>, 
                <span > Next.js</span>, 
                and <span > Spring</span>. 
                This allows me to create robust, scalable web applications that meet diverse project needs. 
                By leveraging Node.js and modern JavaScript libraries alongside Spring, 
                I ensure high-performance solutions across the full stack.</p> 
                <div className="icons">
            <Link href={"https://github.com/Debashismitra01"}>
            <Image 
        src="/github.png"
        alt="github"
        width={30}
        height={30}
        className="Image"
        /></Link>
                <Link href={"https://www.linkedin.com/in/debashismitra01/"}>
            <Image 
        src="/linkedin.png"
        alt="linkedin"
        width={30}
        height={30}
        className="Image"
        /></Link>
            </div>
            </div>
        </div>
        </div>
    )
};