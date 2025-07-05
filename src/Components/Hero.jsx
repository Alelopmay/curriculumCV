import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Wavify from 'react-wavify';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaLaravel } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const Hero = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine); // carga slim para evitar errores
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
            {/* Partículas de fondo */}
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

            {/* Onda inferior */}
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

            {/* Contenido principal */}
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
                        src="/photo/foto.jpeg"
                        alt="Foto de Alejandro López Maya"
                        className="img-fluid rounded-circle"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
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
                    
                </motion.p>

                {/* Tecnologías */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="d-flex justify-content-center flex-wrap gap-3 mt-3"
                >
                    {[
                        { icon: <FaReact size={20} />, name: 'React', bg: '#61dafb', color: '#20232a' },
                        { icon: <FaAngular size={20} />, name: 'Angular', bg: '#dd0031', color: '#fff' },
                        { icon: <SiSpringboot size={20} />, name: 'Spring Boot', bg: '#6db33f', color: '#fff' },
                        { icon: <FaLaravel size={20} />, name: 'Laravel', bg: '#ff2d20', color: '#fff' },
                    ].map((tech, i) => (
                        <div
                            key={i}
                            className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                            style={{
                                backgroundColor: tech.bg,
                                color: tech.color,
                                fontWeight: '500',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            {tech.icon} {tech.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

