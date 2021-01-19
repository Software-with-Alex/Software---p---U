import React from 'react';
import Particles from 'react-particles-js';


const Footer = () => {

    return (
        <>
    <footer className="footer" id="footer">
            <p className="footer__title">Alex Hill</p>
            <div className="footer__social">
                <a href="#" class="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>
        

        </>
    )
}

export default Footer;