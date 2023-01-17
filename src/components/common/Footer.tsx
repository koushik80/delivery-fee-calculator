import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer text-slate-400 '>
        <div>
            Copyright &copy; {(new Date()).getFullYear()} Koushik
        </div>
    </div>
  )
}

export default Footer;