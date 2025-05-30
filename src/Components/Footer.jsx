import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>© {new Date().getFullYear()} Alejandro López Maya. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
