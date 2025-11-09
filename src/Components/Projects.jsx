import React, { useState, useEffect } from "react";
import {
    FaLaptopCode,
    FaClock,
    FaCogs,
    FaTools,
    FaChalkboardTeacher,
    FaClinicMedical,
    FaSwimmer,
    FaHeadphonesAlt,
    FaGithub,
    FaVideo,
    FaTimes,
    FaCar
} from "react-icons/fa";

const projectsData = [
    {
        id: 1,
        icon: <FaClock />,
        title: "TimeFlow",
        image: "/photo/timeFlow.png",
        description: `TimeFlow es un sistema de fichajes (control horario) desarrollado con Angular y Spring Boot.
Está diseñado para registrar entradas, salidas, descansos y ausencias de empleados. Permite asignar y
modificar horarios, justificar faltas, consultar historiales laborales y controlar vacaciones. Los empleados pueden
ver su agenda personalizada en tiempo real.`,
        links: [
            { href: "https://github.com/Alelopmay/timeFlow", label: "Frontend (Angular)" },
            { href: "https://github.com/Alelopmay/TimeFlowback", label: "Backend (Spring Boot)" },
        ],
    },
    {
        id: 2,
        icon: <FaCogs />,
        title: "EquipFix",
        image: "/photo/equipFix.png",
        description: `EquipFix es una solución empresarial desarrollada en React y Spring Boot para la gestión del
mantenimiento de equipos industriales. Permite registrar fallas, asignar técnicos y realizar seguimiento al estado de reparación.`,
        links: [
            {
                href: "https://drive.google.com/file/d/1qoB0z89Sm_9xNuJQhBoJRXbAX4SFoPlH/view?usp=sharing",
                label: "Video",
                isVideo: true,
            },
            { href: "https://github.com/Alelopmay/Equipfix", label: "Frontend (React)" },
            { href: "https://github.com/Alelopmay/equipmentMaintenance", label: "Backend (Spring Boot)" },
        ],
    },
    {
        id: 3,
        icon: <FaTools />,
        title: "Protaller",
        image: "/photo/prototaller.png",
        description: `Protaller es una aplicación diseñada para la gestión integral de talleres mecánicos, incluyendo
control de inventarios, programación de citas, gestión de clientes y generación de reportes en
tiempo real.`,
        links: [
            {
                href: "https://drive.google.com/file/d/1k2yPTV7oz8OscxjUHwHCTJ66Cc2FKh--/view?usp=sharing",
                label: "Video",
                isVideo: true,
            },
            { href: "https://github.com/Alelopmay/Protaller", label: "Frontend (Angular)" },
            { href: "https://github.com/Alelopmay/protallerback", label: "Backend (Spring Boot)" },
        ],
    },
    {
        id: 4,
        icon: <FaChalkboardTeacher />,
        title: "TutorialHub",
        image: "/photo/tutorial.png",
        description: `TutorialHub es una plataforma educativa que permite a estudiantes encontrar y contactar
profesores particulares. Incluye programación de clases, pagos y seguimiento de progreso
académico.`,
        links: [
            {
                href: "https://drive.google.com/file/d/1yC5KsmyWCg1Wc6vE8AdvMeNDkD2UXA6C/view?usp=drive_link",
                label: "Video",
                isVideo: true,
            },
            { href: "https://github.com/Alelopmay/tutorialHub2", label: "Frontend (Angular)" },
            { href: "https://github.com/JoseJavier1801/TutorialHub", label: "Backend (Spring Boot)" },
        ],
    },
    {
        id: 5,
        icon: <FaClinicMedical />,
        title: "ClínicaPro",
        image: "/photo/clinica.png",
        description: `ClínicaPro es una innovadora plataforma para clínicas de fisioterapia, que ofrece agendamiento
inteligente de citas, historial clínico digital, reportes terapéuticos y comunicación con los
pacientes.`,
        links: [
            { href: "https://github.com/Alelopmay/clinicay", label: "Frontend (Angular)" },
            { href: "https://github.com/Alelopmay/clinicBack", label: "Backend (Spring Boot)" },
        ],
    },
    {
        id: 6,
        icon: <FaSwimmer />,
        title: "SwimTrack",
        image: "/photo/sim.png",
        description: `SwimTrack es una aplicación para monitores de natación que permite registrar sesiones de
entrenamiento, controlar el progreso de nadadores y generar estadísticas de rendimiento a lo
largo del tiempo. Incluye funciones de gestión de usuarios, sesiones y estadísticas. Este proyecto está realizado en Ionic.`,
        links: [
            {
                href: "https://drive.google.com/file/d/1xpVmRtfpivB1FaXuRjK5JbVuaRJIkp0Z/view?usp=drive_link",
                label: "Video",
                isVideo: true,
            },
        ],
    },
    {
        id: 7,
        icon: <FaHeadphonesAlt />,
        title: "Spotyfy",
        image: "/photo/spoty.png",
        description: `Spotyfy es una aplicación educativa diseñada para explorar las funcionalidades de reproducción
musical, integrando búsqueda de canciones, listas personalizadas y control de audio en tiempo real.`,
        links: [
            { href: "https://github.com/rafa30052003/proyectoSpoty", label: "GitHub (java fxml)" },
        ],
    },
    {
        id: 8,
        icon: <FaCar />,
        title: "CarReserve",
        image: "/photo/reserve.png",
        description: `CarReserve es una aplicación empresarial para la gestión y reserva de vehículos corporativos.
            Permite a las empresas organizar el uso de su flota, gestionar las reservas y visualizar la disponibilidad de los coches en tiempo real. Desarrollada con React y Spring Boot.`,
        links: [
            {
                href: "https://drive.google.com/file/d/1DrqsJ6Uumpq94oGnM5-fy7mioENAXROy/view?usp=sharing",
                label: "Video",
                isVideo: true,
            },
            { href: "https://github.com/Alelopmay/CarResve", label: "Frontend (React)" },
            { href: "https://github.com/Alelopmay/carReservaDB-app", label: "Backend (Laravel)" },
        ],
    },
];

const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);

    // Cierra el modal con ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setExpandedId(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const toggleDetails = (id) => {
        setExpandedId((current) => (current === id ? null : id));
    };

    const handleKeyDown = (event, id) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleDetails(id);
        }
    };

    return (
        <section
            id="projects"
            className="py-5"
            style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                color: "#ffffff",
                minHeight: "100vh",
            }}
        >
            <div className="container">
                <h2
                    className="mb-4 d-flex align-items-center text-white"
                    style={{ fontSize: "2.4rem" }}
                >
                    <FaLaptopCode className="me-2 text-info" />
                    Proyectos
                </h2>
                <div
                    className="projects-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem",
                    }}
                >
                    {projectsData.map(({ id, icon, title }) => (
                        <div
                            key={id}
                            role="button"
                            tabIndex={0}
                            aria-expanded={expandedId === id}
                            onClick={() => toggleDetails(id)}
                            onKeyDown={(e) => handleKeyDown(e, id)}
                            style={{
                                background:
                                    "linear-gradient(145deg, #334155, #1e293b)",
                                borderRadius: "12px",
                                boxShadow:
                                    "0 6px 18px rgba(14, 165, 233, 0.3)",
                                color: "#f0f9ff",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.3rem",
                                padding: "1.5rem",
                                fontWeight: "600",
                                userSelect: "none",
                                transition: "transform 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                if (expandedId !== id) e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                if (expandedId !== id) e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <span style={{ fontSize: "2.2rem", marginRight: "12px", color: "#0ea5e9" }}>
                                {icon}
                            </span>
                            {title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Ventana modal emergente */}
            {expandedId !== null && (
                <Modal
                    project={projectsData.find((p) => p.id === expandedId)}
                    onClose={() => setExpandedId(null)}
                />
            )}
        </section>
    );
};

const Modal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <>
            {/* Fondo oscuro */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    zIndex: 1000,
                    cursor: "pointer",
                }}
                aria-hidden="true"
            />
            {/* Ventana modal */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={`modal-title-${project.id}`}
                tabIndex={-1}
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                        "linear-gradient(145deg, #334155, #1e293b)",
                    borderRadius: "15px",
                    boxShadow: "0 0 20px rgba(14, 165, 233, 0.8)",
                    color: "#f0f9ff",
                    maxWidth: "720px",
                    width: "90vw",
                    maxHeight: "85vh",
                    overflowY: "auto",
                    padding: "1.5rem 2rem",
                    zIndex: 1001,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <header
                    id={`modal-title-${project.id}`}
                    style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        color: "#0ea5e9",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "2.5rem" }}>{project.icon}</span>
                        {project.title}
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Cerrar ventana de proyecto"
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#0ea5e9",
                            fontSize: "1.8rem",
                            cursor: "pointer",
                            lineHeight: 1,
                            padding: 0,
                            userSelect: "none",
                        }}
                    >
                        <FaTimes />
                    </button>
                </header>

                <img
                    src={project.image}
                    alt={`Imagen del proyecto ${project.title}`}
                    style={{
                        width: "100%",
                        maxHeight: "280px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        border: "2px solid #0ea5e9",
                        marginBottom: "1rem",
                    }}
                    loading="lazy"
                />

                <p
                    style={{
                        whiteSpace: "pre-line",
                        fontSize: "1.1rem",
                        lineHeight: "1.5",
                        marginBottom: "1rem",
                        color: "#e0e7ff",
                    }}
                >
                    {project.description}
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                        fontSize: "1rem",
                        justifyContent: "flex-start",
                    }}
                >
                    {project.links.map(({ href, label, isVideo }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn ${isVideo ? "btn-danger" : "btn-info"} d-flex align-items-center`}
                            style={{
                                gap: 6,
                                fontWeight: "600",
                                padding: "0.4rem 0.75rem",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "white",
                                backgroundColor: isVideo ? "#dc2626" : "#0ea5e9",
                                display: "inline-flex",
                                alignItems: "center",
                                transition: "background-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = isVideo ? "#b91c1c" : "#0284c7";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = isVideo ? "#dc2626" : "#0ea5e9";
                            }}
                        >
                            {isVideo ? <FaVideo /> : <FaGithub />}
                            <span style={{ marginLeft: "6px" }}>{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
