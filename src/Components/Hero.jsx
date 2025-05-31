import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Wavify from 'react-wavify';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaLaravel } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const spherePositions = [
    { top: '10%', left: '5%' },
    { top: '20%', right: '10%' },
    { bottom: '15%', left: '15%' },
    { bottom: '20%', right: '5%' },
    { top: '35%', left: '50%' },
];

const Hero = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <section
            id="hero"
            className="position-relative vh-100 text-light d-flex flex-column align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                overflow: 'hidden',
            }}
        >
            {/* Particles background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: { color: 'transparent' },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: 'push' },
                            onHover: { enable: true, mode: 'repulse' },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: '#a1c6ea' },
                        links: {
                            color: '#a1c6ea',
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        collisions: { enable: false },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: { default: 'bounce' },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 50,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 4 } },
                    },
                    detectRetina: true,
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            {/* Floating spheres (desktop only) */}
            {spherePositions.map((pos, i) => (
                <motion.div
                    key={i}
                    className="d-none d-md-block" // Only visible on desktop
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: [0.9, 1.05, 1], opacity: 0.8 }}
                    transition={{
                        duration: 2 + i * 0.2,
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        border: '2px solid #a1c6ea',
                        background: 'rgba(161, 198, 234, 0.05)',
                        boxShadow: '0 0 20px rgba(161, 198, 234, 0.4)',
                        position: 'absolute',
                        zIndex: 1,
                        ...pos,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#a1c6ea',
                            boxShadow: '0 0 10px #a1c6ea',
                        }}
                    />
                </motion.div>
            ))}

            {/* Wave at the bottom */}
            <Wavify
                fill="#a1c6ea"
                paused={false}
                options={{ height: 20, amplitude: 30, speed: 0.1, points: 5 }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 0,
                    opacity: 0.2,
                    pointerEvents: 'none',
                }}
            />

            {/* Main content */}
            <div
                className="container text-center position-relative d-flex flex-column align-items-center"
                style={{ zIndex: 2, maxWidth: '700px' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-100 my-4 d-flex justify-content-center"
                    style={{
                        maxWidth: '220px',
                        border: '4px solid #a1c6ea',
                        borderRadius: '50%',
                        padding: '4px',
                    }}
                >
                    <img
                        src="/assets/photo/foto.jpeg"
                        alt="Foto de Alejandro López Maya"
                        className="img-fluid rounded-circle"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />

                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="display-4 fw-bold"
                    style={{
                        background: 'linear-gradient(to right, #a1c6ea, #60a5fa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Hola, soy Alejandro López Maya
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="lead text-light"
                >
                    Programador Full Stack de aplicaciones web y multiplataforma.<br />
                    Habilidad en frameworks como Angular, Spring Boot, React y Laravel.
                </motion.p>

                {/* Tech stack badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="d-flex justify-content-center flex-wrap gap-3 mt-3"
                >
                    <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                        style={{
                            backgroundColor: '#61dafb',
                            color: '#20232a',
                            fontWeight: '500',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaReact size={20} /> React
                    </div>

                    <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                        style={{
                            backgroundColor: '#dd0031',
                            color: '#ffffff',
                            fontWeight: '500',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaAngular size={20} /> Angular
                    </div>

                    <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                        style={{
                            backgroundColor: '#6db33f',
                            color: '#ffffff',
                            fontWeight: '500',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <SiSpringboot size={20} /> Spring Boot
                    </div>

                    <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                        style={{
                            backgroundColor: '#ff2d20',
                            color: '#ffffff',
                            fontWeight: '500',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaLaravel size={20} /> Laravel
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
