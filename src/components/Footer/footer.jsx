import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer style={styles.footer}>
    <div style={styles.divcontent}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'2vh'}}>
        <a href="https://facebook.com"><FaInstagram  style={{color:'#000000'}}/> @hypersuplementos</a>
        <a href="https://facebook.com"><FaWhatsapp style={{color:'#000000'}}/> (81) 91234-5678</a>
        <a href="https://facebook.com"><MdOutlineEmail  style={{color:'#000000'}}/> hypersuplementos@gmail.com</a>
      </div>
      <div style={{display:'flex',flexDirection:'Row',itemalignItems:'center',justifyContent:'space-around'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'1vh'}}>
                <h3> Menu </h3>
                <a href="/">Home</a>
                <a href="/">Sobre Nós</a>
                <a href="/">Suporte</a>
            </div>
            <img src="https://logodownload.org/wp-content/uploads/2021/04/optimum-nutrition-logo-0.png" alt="Logo" style={{width: '100px', height: 'auto'}}/>
        </div>
      </div>
    <p>© 2025 Hyper Suplementos - Todos os direitos reservados - Proibida reprodução total ou parcial.</p>
    </footer>
  );
};

export default Footer;