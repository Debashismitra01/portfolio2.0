"use client";
import React, { useState } from "react";
import './navbar.css';
import Link from "next/link";

export default function Navbar() {
    const [selected, setSelected] = useState<string>('home');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSetActive = (value: string): void => {
        setSelected(value);
    };

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <img src="/logo.png" alt="logo" />
            <div className="navbar-right">
                <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                    <Link 
                        className={`nav-item ${selected === 'home' ? 'selected' : ''}`}
                        href="#home"
                        onClick={() => handleSetActive('home')}
                    >
                        Home
                    </Link>
                    <Link 
                        className={`nav-item ${selected === 'about' ? 'selected' : ''}`}
                        href="#about"
                        onClick={() => handleSetActive('about')}
                    >
                        About
                    </Link>
                    <Link 
                        className={`nav-item ${selected === 'project' ? 'selected' : ''}`}
                        href="#project"
                        onClick={() => handleSetActive('project')}
                    >
                        Project
                    </Link>
                    <Link
                        href="https://debashisblog.vercel.app/" 
                        className="nav-item"
                    >
                        Blog
                    </Link>
                    <Link 
                        className={`nav-item ${selected === 'contact' ? 'selected' : ''}`}
                        href="#contact"
                        onClick={() => handleSetActive('contact')}
                    >
                        Contact
                    </Link>
                </div>
                <div 
                    className={`container ${isOpen ? 'change' : ''}`} 
                    onClick={toggleMenu}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
        </div>
    );
}
