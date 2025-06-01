import React, { useEffect, useState } from "react";
import {
    FaCode,
    FaTools,
    FaCogs,
    FaDesktop,
    FaLaptopCode,
    FaMicrosoft,
    FaNetworkWired,
} from "react-icons/fa";

const categoryIcons = {
    "Lenguajes de Programación": <FaCode size={28} color="#3b82f6" />,
    "Entornos de Desarrollo": <FaTools size={28} color="#3b82f6" />,
    Frameworks: <FaCogs size={28} color="#3b82f6" />,
    "Sistemas Operativos": <FaDesktop size={28} color="#3b82f6" />,
    "Otras Herramientas": <FaLaptopCode size={28} color="#3b82f6" />,
    "Tecnologías Microsoft": <FaMicrosoft size={28} color="#3b82f6" />,
    "Mantenimiento de equipos y redes": <FaNetworkWired size={32} color="#3b82f6" />,
};

const fadeInKeyframes = `
@keyframes fadeInSlide {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const Skills = () => {
    const [loaded, setLoaded] = useState(false);

    const categories = [
        {
            title: "Lenguajes de Programación",
            items: [
                { alt: "HTML", src: "/photo/html.png" },
                { alt: "CSS", src: "/photo/css.png" },
                { alt: "JavaScript", src: "/photo/JavaScript.png" },
                { alt: "Java", src: "/photo/java.png" },
                { alt: "Python", src: "/photo/Python.png" },
                { alt: "C", src: "/photo/c.png" },
                { alt: "SQL", src: "/photo/sql.png" },
                { alt: "PHP", src: "/photo/php.png" },
            ],
        },
        {
            title: "Entornos de Desarrollo",
            items: [
                { alt: "VS Code", src: "/photo/vscode.png" },
                { alt: "IntelliJ", src: "/photo/intellij.png" },
                { alt: "Android Studio", src: "/photo/androidstudio.png" },
                { alt: "Eclipse", src: "/photo/eclipse.png" },
            ],
        },
        {
            title: "Frameworks",
            items: [
                { alt: "Angular", src: "/photo/angular.png" },
                { alt: "Ionic", src: "/photo/ionic.png" },
                { alt: "Spring Boot", src: "/photo/sprinboot.png" },
                { alt: "Laravel", src: "/photo/laravel.png" },
                { alt: "React", src: "/photo/react.png" },
            ],
        },
        {
            title: "Sistemas Operativos",
            items: [
                { alt: "Linux", src: "/photo/fedora.png" },
                { alt: "Windows", src: "/photo/win.png" },
                { alt: "Ubuntu", src: "/photo/ubuntud.png" },
            ],
        },
        {
            title: "Otras Herramientas",
            items: [
                { alt: "WordPress", src: "/photo/word.png" },
                { alt: "GitHub", src: "/photo/git.png" },
                { alt: "Photoshop", src: "/photo/adobe.png" },
                { alt: "Premiere", src: "/photo/premier.png" },
            ],
        },
        {
            title: "Tecnologías Microsoft",
            items: [
                { alt: "SharePoint", src: "/photo/sharepoint.png" },
                { alt: "Power Automate", src: "/photo/powerautomate.png" },
                { alt: "Power Apps", src: "/photo/powerapps.png" },
            ],
        },
    ];
    

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const colors = {
        primary: "#3b82f6",
        backgroundStart: "#1f2937",
        backgroundEnd: "#374151",
        cardBackground: "rgba(31, 41, 55, 0.7)",
        cardBorder: "rgba(59, 130, 246, 0.3)",
        textPrimary: "#f0f4f8",
        textAccent: "#93c5fd",
    };

    return (
        <>
            <style>{fadeInKeyframes}</style>
            <section
                id="tools"
                style={{
                    background: `linear-gradient(135deg, ${colors.backgroundStart}, ${colors.backgroundEnd})`,
                    padding: "3rem 1rem",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    minHeight: "100vh",
                    color: colors.textPrimary,
                }}
            >
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <h2
                        style={{
                            color: colors.primary,
                            borderBottom: `4px solid ${colors.primary}`,
                            paddingBottom: "0.75rem",
                            marginBottom: "2.5rem",
                            fontWeight: "700",
                            fontSize: "2.5rem",
                            letterSpacing: "1.2px",
                            textAlign: "center",
                            textShadow: `0 1px 4px rgba(59, 130, 246, 0.5)`,
                        }}
                    >
                        Herramientas y Lenguajes Conocidos y Utilizados
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2rem",
                            justifyContent: "center",
                        }}
                    >
                        {categories.map(({ title, items }, index) => (
                            <div
                                key={title}
                                tabIndex={0}
                                role="region"
                                aria-labelledby={`category-${index}`}
                                style={{
                                    flex: "1 1 320px",
                                    backgroundColor: colors.cardBackground,
                                    borderRadius: 18,
                                    padding: "2rem 1.75rem",
                                    boxShadow: `0 4px 12px rgba(59, 130, 246, 0.15)`,
                                    display: "flex",
                                    flexDirection: "column",
                                    animationName: "fadeInSlide",
                                    animationDuration: "0.8s",
                                    animationFillMode: "forwards",
                                    animationTimingFunction: "ease",
                                    animationDelay: `${index * 0.15}s`,
                                    opacity: loaded ? 1 : 0,
                                    transform: loaded ? "translateY(0)" : "translateY(-20px)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    outline: "none",
                                    minWidth: 320,
                                    maxWidth: 350,
                                    boxSizing: "border-box",
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.transform = "scale(1.06)";
                                    e.currentTarget.style.boxShadow =
                                        "0 10px 30px rgba(59, 130, 246, 0.4)";
                                    e.currentTarget.style.outline = `2px solid ${colors.primary}`;
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 12px rgba(59, 130, 246, 0.15)";
                                    e.currentTarget.style.outline = "none";
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.06)";
                                    e.currentTarget.style.boxShadow =
                                        "0 10px 30px rgba(59, 130, 246, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 12px rgba(59, 130, 246, 0.15)";
                                }}
                            >
                                <h3
                                    id={`category-${index}`}
                                    style={{
                                        color: colors.primary,
                                        fontWeight: "700",
                                        fontSize: "1.6rem",
                                        marginBottom: "1.5rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        textShadow: `0 1px 3px rgba(59, 130, 246, 0.5)`,
                                    }}
                                >
                                    {categoryIcons[title]}
                                    {title}
                                </h3>

                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "center",
                                        gap: "1.75rem",
                                    }}
                                >
                                    {items.map(({ alt, src }) => (
                                        <div
                                            key={alt}
                                            tabIndex={0}
                                            aria-label={alt}
                                            role="img"
                                            style={{
                                                width: 90,
                                                cursor: "pointer",
                                                transition: "transform 0.3s ease",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                outline: "none",
                                            }}
                                            onFocus={(e) => {
                                                e.currentTarget.style.transform = "scale(1.2)";
                                                e.currentTarget.style.zIndex = 10;
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.zIndex = "auto";
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "scale(1.2)";
                                                e.currentTarget.style.zIndex = 10;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.zIndex = "auto";
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 74,
                                                    height: 74,
                                                    borderRadius: "50%",
                                                    overflow: "hidden",
                                                    boxShadow:
                                                        "0 6px 20px rgba(59, 130, 246, 0.25), 0 0 12px rgba(59, 130, 246, 0.1)",
                                                    marginBottom: 10,
                                                    backgroundColor: "#1f2937",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    border: `2px solid ${colors.primary}`,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                <img
                                                    src={src}
                                                    alt={alt}
                                                    style={{
                                                        maxHeight: "52px",
                                                        maxWidth: "52px",
                                                        objectFit: "contain",
                                                        pointerEvents: "none",
                                                        userSelect: "none",
                                                    }}
                                                />
                                            </div>
                                            <span
                                                style={{
                                                    fontSize: "0.95rem",
                                                    fontWeight: "700",
                                                    color: colors.textAccent,
                                                    textAlign: "center",
                                                    userSelect: "none",
                                                }}
                                            >
                                                {alt}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
