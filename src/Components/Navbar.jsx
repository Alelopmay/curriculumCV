import React, { useState, useEffect } from 'react';
import {
    FaHome,
    FaUser,
    FaCode,
    FaProjectDiagram,
    FaEnvelope,
    FaSwimmingPool,
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const iconColor = '#00ffc3';

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 768); // móviles y tablets
    };

    useEffect(() => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        return () => window.removeEventListener('resize', updateIsMobile);
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarVisible = isOpen || !isMobile;

    const sidebarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: isOpen ? '200px' : isMobile ? '0px' : '60px',
        backgroundColor: '#1f1f2e',
        color: '#fff',
        padding: isMobile && !isOpen ? '0' : '1rem 0.5rem',
        transition: 'width 0.3s ease, padding 0.3s ease',
        zIndex: 1000,
        overflowX: 'hidden',
        display: sidebarVisible ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const linkTextStyle = {
        marginLeft: '10px',
        whiteSpace: 'nowrap',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease',
    };

    const toggleButtonStyle = {
        position: 'fixed',
        top: '1rem',
        left: isOpen ? '210px' : '15px',
        backgroundColor: '#1f1f2e',
        border: 'none',
        color: '#fff',
        zIndex: 1050,
        transition: 'left 0.3s ease',
        padding: '0.5rem',
        borderRadius: '4px',
    };

    const navItems = [
        { icon: <FaHome style={{ color: iconColor }} />, text: 'Inicio', href: '#home' },
        { icon: <FaUser style={{ color: iconColor }} />, text: 'Sobre mí', href: '#about' },
        { icon: <FaCode style={{ color: iconColor }} />, text: 'Habilidades', href: '#skills' },
        { icon: <FaProjectDiagram style={{ color: iconColor }} />, text: 'Proyectos', href: '#projects' },
        { icon: <FaEnvelope style={{ color: iconColor }} />, text: 'Contacto', href: '#contact' },
    ];

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleNavbar}
                className="btn"
                style={toggleButtonStyle}
                aria-label="Toggle navbar"
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <div style={sidebarStyle}>
                <div className="d-flex flex-column gap-3 mt-4">
                    {navItems.map(({ icon, text, href }) => (
                        <a
                            key={text}
                            href={href}
                            className="d-flex align-items-center text-decoration-none text-white px-2"
                        >
                            {icon}
                            <span style={linkTextStyle}>{text}</span>
                        </a>
                    ))}
                </div>
                <div className="text-center mb-3">
                    <FaSwimmingPool size={24} style={{ color: iconColor }} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
