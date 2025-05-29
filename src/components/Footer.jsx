import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-100 bg-light text-center">
            <p>&copy; {currentYear} Gs Technical. All rights reserved | Terms and Conditions</p>
        </footer>
    );
};

export default Footer;
