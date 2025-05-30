import React from 'react';

const Practice = () => {
    const fadeInKeyframes = `
    @keyframes fadeInSlide {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes zoomInShadow {
      from {
        transform: scale(1);
        box-shadow: 0 4px 12px rgba(0, 255, 195, 0.15);
      }
      to {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 255, 195, 0.35);
      }
    }
  `;

    const containerStyle = {
        background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        color: '#f0f4f8',
        padding: '3rem 1rem',
        minHeight: '100vh',
    };

    const sectionStyle = {
        maxWidth: 900,
        margin: '0 auto',
    };

    const headerStyle = {
        borderBottom: '3px solid #a1c6ea',
        paddingBottom: '0.75rem',
        marginBottom: '2rem',
        fontWeight: '700',
        fontSize: '1.8rem',
        color: '#a1c6ea',
        textAlign: 'center',
    };

    const cardBaseStyle = {
        backgroundColor: 'rgba(10, 25, 47, 0.7)',
        border: '1px solid rgba(161, 198, 234, 0.3)',
        borderRadius: 8,
        padding: '1.5rem',
        marginBottom: '2.5rem',
        opacity: 0,
        transform: 'translateY(20px)',
        animationFillMode: 'forwards',
        animationDuration: '0.8s',
        animationTimingFunction: 'ease',
        boxShadow: '0 4px 12px rgba(0, 255, 195, 0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
    };

    const accentTextStyle = {
        color: '#a1c6ea',
        fontWeight: '600',
        marginBottom: '0.75rem',
    };

    const paragraphStyle = {
        color: 'rgba(240, 244, 248, 0.7)',
        marginBottom: '1.25rem',
        lineHeight: 1.5,
        fontSize: '1rem',
    };

    const timeStyle = {
        color: 'rgba(240, 244, 248, 0.7)',
        fontStyle: 'italic',
        fontSize: '0.9rem',
        display: 'block',
    };

    const animationDelays = ['0.2s', '0.4s', '0.6s'];

    // Para hover con inline styles en React tenemos que usar estado,
    // así que vamos a usar un componente interno para la tarjeta que maneje el hover

    const ExperienceCard = ({ title, role, description, date, dateTime, delay }) => {
        const [hovered, setHovered] = React.useState(false);

        return (
            <article
                style={{
                    ...cardBaseStyle,
                    animationName: 'fadeInSlide',
                    animationDelay: delay,
                    opacity: 1,
                    transform: 'translateY(0)',
                    ...(hovered
                        ? {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 20px rgba(0, 255, 195, 0.35)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }
                        : {}),
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h3 style={{ color: '#f0f4f8', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={accentTextStyle}>{role}</p>
                <p style={paragraphStyle}>{description}</p>
                <time dateTime={dateTime} style={timeStyle}>
                    {date}
                </time>
            </article>
        );
    };

    return (
        <>
            <style>{fadeInKeyframes}</style>
            <div style={containerStyle} id="experience">
                <section style={sectionStyle}>
                    <h2 style={headerStyle}>Experiencia Laboral en Prácticas</h2>

                    <ExperienceCard
                        title="Reset Informática Montilla"
                        role="Técnico Informático"
                        description="Mantenimiento preventivo y correctivo de equipos informáticos. Realicé reparación de equipos de clientes, migración de sus datos a la base de datos de la empresa y gestión de la logística asociada al proceso técnico."
                        date="Marzo 2022 - Junio 2022"
                        dateTime="2022-03"
                        delay="0.2s"
                    />
                    <ExperienceCard
                        title="Deuser Córdoba"
                        role="Técnico del Departamento de Calidad"
                        description="Uso de Power Apps, Power Automate y SharePoint con el dpto. de calidad. Diseñé y desarrollé una solución empresarial con Power Apps y Power Automate para gestionar equipos de trabajo en proyectos, automatizando la creación de grupos en Microsoft Teams y la asignación de roles como Project Manager, responsables y técnicos. Integré un bot corporativo para centralizar documentos, normativas e información clave de la empresa. Además, contribuí a la mejora continua de aplicaciones internas existentes, optimizando procesos y usabilidad."
                        date="Marzo 2024 - Junio 2024"
                        dateTime="2024-03"
                        delay="0.4s"
                    />
                    <ExperienceCard
                        title="Ciscon Ingeniería S.L"
                        role="Desarrollador Web"
                        description="Desarrollé una nueva versión de la aplicación MartinCloud utilizando React. Rediseñé e implementé componentes modernos y genéricos que permitieron mejorar tanto la funcionalidad como la mantenibilidad del sistema, optimizando la estructura del código para una renderización eficiente y reutilizable."
                        date="Marzo 2025 - Junio 2025"
                        dateTime="2025-03"
                        delay="0.6s"
                    />
                </section>
            </div>
        </>
    );
};

export default Practice;
