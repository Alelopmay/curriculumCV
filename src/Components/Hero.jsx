import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Wavify from 'react-wavify';

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
                overflow: 'hidden'
            }}
        >
            {/* Fondo animado de partículas */}
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

            {/* Fondo de ondas animadas */}
            <Wavify
                fill="#a1c6ea"
                paused={false}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.1,
                    points: 5,
                }}
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
                style={{ zIndex: 1, maxWidth: '700px' }}
            >
                {/* Imagen con marco y tamaño reducido */}
                <div
                    className="w-100 my-4 d-flex justify-content-center"
                    style={{ maxWidth: '220px', border: '4px solid #a1c6ea', borderRadius: '50%', padding: '4px' }}
                >
                    <img
                        src="src/assets/photo/foto.jpeg"
                        alt="Foto de Alejandro López Maya"
                        className="img-fluid rounded-circle"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>

                <h1
                    className="display-4 fw-bold"
                    style={{
                        background: 'linear-gradient(to right, #a1c6ea, #60a5fa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Hola, soy Alejandro López Maya
                </h1>
                <p className="lead" style={{ color: '#f0f4f8' }}>
                    Desarrollador Frontend especializado en React. <br />
                    Apasionado por construir interfaces modernas, eficientes y visualmente atractivas.
                </p>
            </div>
        </section>
    );
};

export default Hero;
