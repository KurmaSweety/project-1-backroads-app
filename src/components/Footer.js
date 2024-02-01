import React from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
const Footer=()=> {
  return (
    <footer className="section footer">
      <PageLinks parentClass='footer-links' itemClass='footer-link'/>
      <ul className="footer-icons">
         <h1>App</h1>
      </ul>
       
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer> 
  )
}
export default Footer
