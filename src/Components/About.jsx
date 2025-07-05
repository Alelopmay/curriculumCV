import React from 'react';
import { motion } from 'framer-motion';
import {
    FaIdCard, FaUser, FaEnvelope, FaPhoneAlt, FaCarSide,
    FaUserTie, FaHeart, FaLinkedin, FaDownload
} from "react-icons/fa";

const About = () => {
    const primaryColor = '#a1c6ea';
    const secondaryColor = '#f0f4f8';
    const backgroundGradientStart = '#1f2937';
    const backgroundGradientEnd = '#374151';

    return (
        <section
            id="about"
            className="py-5"
            style={{
                color: secondaryColor,
                background: `linear-gradient(135deg, ${backgroundGradientStart}, ${backgroundGradientEnd})`,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Ola decorativa arriba */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                overflow: 'hidden',
                lineHeight: 0,
                zIndex: 1
            }}>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
                    <path
                        d="M0,0V46.29c47.76,22,103.78,29.13,158,17.17C230.4,51.79,284,14.58,339,6.15S458.4,17.94,514,33.29
            c55.6,15.35,112.64,34.47,173,26.64,60.36-7.83,113.78-43.53,170-59.8,
            56.22-16.27,117.92-12.15,172,6.77V0Z"
                        fill={backgroundGradientStart}
                    />
                </svg>
            </div>

            <style>{`
        h2, h4 {
          color: ${primaryColor};
        }
        ul.list-unstyled li svg {
          color: ${primaryColor};
          margin-right: 0.6rem;
          min-width: 20px;
        }
        a.link-accent {
          color: ${primaryColor};
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a.link-accent:hover {
          color: ${secondaryColor};
          text-decoration: underline;
        }
        .about-card {
          background: rgba(255 255 255 / 0.05);
          border: 1px solid rgba(161, 198, 234, 0.3);
          border-radius: 12px;
          padding: 1.8rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 4px 15px rgba(161, 198, 234, 0.15);
          transition: box-shadow 0.3s ease;
        }
        .about-card:hover {
          box-shadow: 0 6px 25px rgba(161, 198, 234, 0.3);
        }
        ul.list-unstyled li {
          margin-bottom: 0.8rem;
          font-weight: 500;
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
      `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.h2
                    className="mb-5 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ fontSize: '2.4rem', fontWeight: '700' }}
                >
                    Sobre Mí
                </motion.h2>

                <div className="row g-5">
                    {/* Datos Personales */}
                    <motion.div
                        className="col-md-6 about-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h4 className="border-bottom pb-2 mb-3 d-flex align-items-center">
                            <FaIdCard className="me-2" /> Datos Personales
                        </h4>
                        <ul className="list-unstyled">
                           
                            <li><FaEnvelope /><strong>Email:</strong> <a href="mailto:alelopmay@gmail.com" className="link-accent">alelopmay@gmail.com</a></li>
                            <li><FaPhoneAlt /><strong>Teléfono:</strong> 644 89 87 40</li>
                            <li><FaLinkedin /><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alejandro-lópez-maya-39a7b5263" target="_blank" rel="noreferrer" className="link-accent">Visitar perfil</a></li>
                            <li><FaCarSide /><strong>Permiso de Conducir:</strong> B</li>
                        </ul>
                    </motion.div>

                    {/* Perfil Profesional y Aficiones */}
                    <motion.div
                        className="col-md-6 about-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h4 className="border-bottom pb-2 mb-3 d-flex align-items-center">
                            <FaUserTie className="me-2" /> Perfil Profesional
                        </h4>
                        <p style={{ fontSize: '1.05rem' }}>
                            Persona enfocada, organizada y adaptable, con habilidades para trabajar en equipo y liderar proyectos.
                            Me esfuerzo por aportar soluciones prácticas y eficientes en cada entorno profesional.
                        </p>

                        <h4 className="border-bottom pb-2 mt-4 mb-3 d-flex align-items-center">
                            <FaHeart className="me-2" /> Aficiones
                        </h4>
                        <p style={{ fontSize: '1.05rem' }}>
                            Apasionado por las nuevas tecnologías, el desarrollo de software, la colaboración en proyectos y el
                            aprendizaje continuo. Interés en lectura tecnológica y actividades al aire libre.
                        </p>
                    </motion.div>
                </div>

                {/* Estudios y habilidades */}
                <motion.div
                    className="row mt-5 about-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="col-12">
                        <h4>Estudios y Certificados</h4>
                        <ul className="list-unstyled mb-4">
                            <li><strong>Abril 2021:</strong> Curso SQL Online</li>
                            <li><strong>2020–2022:</strong> Técnico en Sistemas Microinformáticos y Redes – IES Inca Garcilaso</li>
                            <li><strong>2022–2024:</strong> Técnico Superior DAM – IES Francisco de los Ríos</li>
                            <li><strong>Abril–Mayo 2024:</strong> Curso SharePoint, Power Apps y Power Automate</li>
                            <li><strong>2024–2025:</strong> Técnico Superior DAW – IES Francisco de los Ríos</li>
                            <li><strong>Marzo–Mayo 2025:</strong> Cisco Packet Tracer</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Botón de descarga de CV */}
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1T5etb55YXzOxh7sciauGIpWJ2lkUZElE"
                        target="_blank"
                        rel="noreferrer"
                        className="link-accent"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.6rem 1.2rem',
                            border: '2px solid #a1c6ea',
                            borderRadius: '8px',
                            color: '#a1c6ea',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#a1c6ea'}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <FaDownload style={{ marginRight: '8px' }} /> Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
