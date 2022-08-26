import React from 'react';
import LinkedInIcon  from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/moazzam-hameed-399005243/' target='_blank'>
            <LinkedInIcon />
            </a>
        </div>
        <p> &copy; 2022 moazzam.com</p>
    </div>
  )
}

export default Footer
