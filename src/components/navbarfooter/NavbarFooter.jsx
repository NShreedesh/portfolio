import React from 'react'
import {BsFacebook, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';

import './navbarfooter.scss';

function NavbarFooter() {
  return (
    <div id="footer-nav">
          <div className="fotter-top">
            <p>
              &copy; Shreedesh Niroula
            </p>
          </div>
          <div className="footer-bottom">
            <a target="_blank" 
              rel='noopener noreferrer'
              href="https://www.facebook.com/shreedesh.niroula.9/">
              <BsFacebook/>
            </a>
            <a target="_blank" 
              rel='noopener noreferrer'
              href="https://www.instagram.com/shreedeshniroula/">
              <BsInstagram/>
            </a>
            <a target="_blank" 
              rel='noopener noreferrer'
              href="https://github.com/NShreedesh">
              <BsGithub/>
            </a>
            <a target="_blank" 
              rel='noopener noreferrer'
              href="https://www.linkedin.com/in/shreedesh-niroula-5993881b8/">
              <BsLinkedin/>
            </a>
          </div>
        </div>
  )
}

export default NavbarFooter