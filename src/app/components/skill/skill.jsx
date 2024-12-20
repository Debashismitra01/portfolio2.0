import React from "react";
import './skill.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Skills = () => {
    return (
        <div className="skill"id="skill">
            <div className="skill_title" >
                <h1>My Skills</h1>
                <img src="/theme_pattern.svg" alt="theme pattern" />
            </div>
            <div className="skillsection">
                <div className="skillgroup">
                    <h1>Frontend Developer</h1>
                    <ul className="skillcontainer">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind</li>
                        <li>BootStrap</li>
                    </ul>
                </div>
                <div className="skillgroup">
                    <h1>Backend Developer</h1>
                    <ul className="skillcontainer">
                        <li>Node JS</li>
                        <li>Express JS</li>
                        <li>Spring</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Supabase</li>
                        <li>Rest API</li>
                    </ul>
                </div>
                <div className="skillgroup">
                    <h1>DevOPS</h1>
                    <ul className="skillcontainer">
                        <li>GIt/Github</li>
                        <li>AWS</li>
                        <li>GCloud</li>
                        <li>Docker</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
            </div>)
}

export default Skills;