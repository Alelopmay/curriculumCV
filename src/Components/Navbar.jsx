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
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    const iconColor = '#a1c6ea';
    const bgColor = '#1f2937';
    const hoverColor = '#374151';
    const textColor = '#ffffff';

    const updateIsMobileOrTablet = () => {
        setIsMobileOrTablet(window.innerWidth <= 1024); // Móvil y tablet
    };

    useEffect(() => {
        updateIsMobileOrTablet();
        window.addEventListener('resize', updateIsMobileOrTablet);
        return () => window.removeEventListener('resize', updateIsMobileOrTablet);
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarVisible = isOpen || (!isMobileOrTablet);

    const sidebarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: isOpen ? '200px' : isMobileOrTablet ? '0px' : '60px',
        backgroundColor: bgColor,
        color: textColor,
        padding: isOpen ? '1rem 0.5rem' : '0',
        transition: 'width 0.3s ease, padding 0.3s ease',
        zIndex: 1000,
        overflowX: 'hidden',
        display: sidebarVisible ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    };

    const linkTextStyle = {
        marginLeft: '10px',
        whiteSpace: 'nowrap',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease',
        color: textColor,
    };

    const toggleButtonStyle = {
        position: 'fixed',
        top: '1rem',
        left: isOpen ? '210px' : '15px',
        backgroundColor: bgColor,
        border: 'none',
        color: textColor,
        zIndex: 1050,
        transition: 'left 0.3s ease',
        padding: '0.5rem',
        borderRadius: '4px',
    };

    const navItems = [
        { icon: <FaHome style={{ color: iconColor }} />, text: 'Inicio', href: '#home' },
        { icon: <FaUser style={{ color: iconColor }} />, text: 'Sobre mí', href: '#about' },
        { icon: <FaEnvelope style={{ color: iconColor }} />, text: 'Practice', href: '#practice' },
        { icon: <FaCode style={{ color: iconColor }} />, text: 'Habilidades', href: '#skills' },
        { icon: <FaProjectDiagram style={{ color: iconColor }} />, text: 'Proyectos', href: '#projects' },
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
                            className="d-flex align-items-center text-decoration-none px-2 py-2 rounded"
                            style={{
                                color: textColor,
                                transition: 'background 0.3s, transform 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = hoverColor;
                                e.currentTarget.style.transform = 'scale(1.03)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
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
