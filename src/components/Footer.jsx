import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='custom-footer'>
      <div className='footer-container'>
        {/* Subscribe Section */}
        <div className='footer-subscribe'>
          <h2>Stay Connected</h2>
          <p>Join our newsletter to get the latest updates and offers.</p>
          <form className='footer-form'>
            <input type='email' placeholder='Enter your email' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>

        {/* Footer Links */}
        <div className='footer-links'>
          <div>
            <h4>Company</h4>
            <Link to='/about'>About</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/investors'>Investors</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link to='/contact'>Contact</Link>
            <Link to='/faq'>FAQs</Link>
            <Link to='/terms'>Terms</Link>
          </div>
          <div>
            <h4>Follow Us</h4>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>Instagram</a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>Twitter</a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>LinkedIn</a>
          </div>

          <div>
            <h4>Quick Links</h4>
            <Link to='/services'>Services</Link>
            <Link to='/products'>Products</Link>
            <Link to='/sign-up'>Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} TRVL. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
