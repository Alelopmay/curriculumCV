import React from 'react';
import { FaIdCard, FaUser, FaEnvelope, FaPhoneAlt, FaCarSide, FaUserTie, FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const About = () => {
    // Colores suaves para un diseño más elegante
    const primaryColor = '#a1c6ea'; // azul pastel
    const secondaryColor = '#f0f4f8'; // blanco suave
    const backgroundGradientStart = '#1f2937'; // gris oscuro azulado
    const backgroundGradientEnd = '#374151'; // gris medio

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
            <style>{`
                /* Animación suave de brillo */
                @keyframes subtleGlow {
                    0%, 100% {
                        text-shadow: 0 0 6px ${primaryColor};
                    }
                    50% {
                        text-shadow: 0 0 12px ${primaryColor};
                    }
                }
                h2, h4 {
                    color: ${primaryColor};
                    animation: subtleGlow 4s ease-in-out infinite;
                }
                /* Iconos con color pastel */
                ul.list-unstyled li svg {
                    color: ${primaryColor};
                    margin-right: 0.6rem;
                    min-width: 20px;
                }
                /* Links con color pastel y transición */
                a.link-accent {
                    color: ${primaryColor};
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                a.link-accent:hover {
                    color: ${secondaryColor};
                    text-decoration: underline;
                }
                /* Contenedores con fondo translúcido y borde suave */
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
                /* List items con buen espaciado */
                ul.list-unstyled li {
                    margin-bottom: 0.8rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                }
            `}</style>

            <div className="container">
                <h2 className="mb-5 text-center">Sobre Mí</h2>

                <div className="row g-5">
                    {/* Datos Personales */}
                    <div className="col-md-6 about-card">
                        <h4 className="border-bottom pb-2 mb-3 d-flex align-items-center">
                            <FaIdCard className="me-2" /> Datos Personales
                        </h4>
                        <ul className="list-unstyled">
                            <li>
                                <FaUser />
                                <strong>Nombre:</strong> Alejandro López Maya
                            </li>
                            <li>
                                <FaEnvelope />
                                <strong>Email:</strong>{" "}
                                <a href="mailto:alelopmay@gmail.com" className="link-accent">
                                    alelopmay@gmail.com
                                </a>
                            </li>
                            <li>
                                <FaPhoneAlt />
                                <strong>Teléfono:</strong> 644 89 87 40
                            </li>
                            <li>
                                <FaLinkedin />
                                <strong>LinkedIn:</strong>{" "}
                                <a
                                    href="https://www.linkedin.com/in/alejandro-lopez-maya-39a7b5263"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link-accent"
                                >
                                    Visitar perfil
                                </a>
                            </li>
                            <li>
                                <FaCarSide />
                                <strong>Permiso de Conducir:</strong> B
                            </li>
                        </ul>
                    </div>

                    {/* Perfil Profesional y Aficiones */}
                    <div className="col-md-6 about-card">
                        <h4 className="border-bottom pb-2 mb-3 d-flex align-items-center">
                            <FaUserTie className="me-2" /> Perfil Profesional
                        </h4>
                        <p>
                            Persona enfocada, organizada y adaptable, con habilidades para trabajar en equipo y liderar
                            proyectos. Me esfuerzo por aportar soluciones prácticas y eficientes en cada entorno profesional.
                        </p>

                        <h4 className="border-bottom pb-2 mt-4 mb-3 d-flex align-items-center">
                            <FaHeart className="me-2" /> Aficiones
                        </h4>
                        <p>
                            Apasionado por las nuevas tecnologías, el desarrollo de software, la colaboración en proyectos y el
                            aprendizaje continuo. Interés en lectura tecnológica y actividades al aire libre.
                        </p>
                    </div>
                </div>

                {/* Estudios y habilidades */}
                <div className="row mt-5 about-card">
                    <div className="col-12">
                        <h4>Estudios y Certificados</h4>
                        <ul className="list-unstyled mb-4">
                            <li><strong>Técnico en Sistemas Microinformáticos y Redes (SMR)</strong> - IES Inca Garcilaso, 2020-2022</li>
                            <li><strong>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> - IES Francisco de los Ríos, 2022-2024</li>
                            <li><strong>Técnico Superior en Desarrollo de Aplicaciones Web (DAW)</strong> - IES Francisco de los Ríos, 2024-2025</li>
                            <li>Curso SQL Online - Abril 2021</li>
                            <li>Curso SharePoint, Power Apps y Power Automate - Abril-Mayo 2024</li>
                            <li>Titulación Cisco Packet Tracer - Marzo-Mayo 2025</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
