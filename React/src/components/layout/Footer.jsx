import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col fs-13 text-center">
                        &copy; {currentYear} - Made with <span className="mdi mdi-heart text-danger"></span> by{' '}
                        <a href="#!" className="fw-semibold">Fincorex</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
