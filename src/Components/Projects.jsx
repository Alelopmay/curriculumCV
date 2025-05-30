import React, { useState } from "react";
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
} from "react-icons/fa";

const projectsData = [
    {
        id: 1,
        icon: <FaClock />,
        title: "TimeFlow",
        image: "src/assets/photo/timeFlow.png",
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
        image: "src/assets/photo/equipFix.png",
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
        image: "src/assets/photo/prototaller.png",
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
        image: "src/assets/photo/tutorial.png",
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
        image: "src/assets/photo/clinica.png",
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
        image: "src/assets/photo/sim.png",
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
        image: "src/assets/photo/spoty.png",
        description: `Spotyfy es una aplicación educativa diseñada para explorar las funcionalidades de reproducción
musical, integrando búsqueda de canciones, listas personalizadas y control de audio en tiempo real.`,
        links: [
            { href: "https://github.com/rafa30052003/proyectoSpoty", label: "GitHub (java fxml)" },
        ],
    },
];

const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);

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
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#ffffff',
            }}
        >
            <div className="container">
                <h2 className="mb-4 d-flex align-items-center text-white">
                    <FaLaptopCode className="me-2 text-info" />
                    Proyectos
                </h2>
                <div className="row g-4">
                    {projectsData.map(({ id, icon, title, image, description, links }) => {
                        const isExpanded = expandedId === id;
                        return (
                            <div key={id} className="col-md-6">
                                <div
                                    className={`card h-100 shadow-lg text-white ${isExpanded ? 'border border-info' : ''
                                        }`}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleDetails(id)}
                                    onKeyDown={(e) => handleKeyDown(e, id)}
                                    aria-expanded={isExpanded}
                                    aria-controls={`project-details-${id}`}
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease',
                                        background: 'linear-gradient(145deg, #334155, #1e293b)',
                                        borderRadius: '12px',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isExpanded) e.currentTarget.style.transform = 'scale(1.03)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isExpanded) e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <div className="card-header d-flex align-items-center bg-dark text-info">
                                        <span className="fs-4 me-3">{icon}</span>
                                        <h5 className="mb-0">{title}</h5>
                                    </div>
                                    <div
                                        id={`project-details-${id}`}
                                        className="collapse"
                                        style={{
                                            display: isExpanded ? 'block' : 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <div className="card-body">
                                            <img
                                                src={image}
                                                alt={`Imagen del proyecto ${title}`}
                                                className="img-fluid rounded mb-3"
                                                style={{
                                                    maxHeight: 200,
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    border: '2px solid #0ea5e9',
                                                }}
                                                loading="lazy"
                                            />
                                            <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
                                            <div className="d-flex flex-wrap gap-2 mt-3">
                                                {links.map(({ href, label, isVideo }, i) => (
                                                    <a
                                                        key={i}
                                                        href={href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`btn ${isVideo ? 'btn-danger' : 'btn-info'
                                                            } d-flex align-items-center`}
                                                        style={{ gap: 6 }}
                                                    >
                                                        {isVideo ? <FaVideo /> : <FaGithub />}
                                                        {label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    
    );
};

export default Projects;
