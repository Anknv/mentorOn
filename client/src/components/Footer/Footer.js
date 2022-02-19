import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-wrap'>
                <div className='footerlinks-container'>
                    <div className='footerlinks-wrapper'>
                        <div className='footer-link-items'>
                            <div className='footer-link-title'>About Us</div>
                            <div className='footer-link'>
                                <Link className='footer-link' to='/'> How it works</Link>
                                <Link className='footer-link' to='/'> Careers</Link>
                                <Link className='footer-link' to='/'> Terms of Service</Link>
                            </div>
                        </div>
                        <div className='footer-link-items'>
                            <div className='footer-link-title'>Contact Us</div>
                            <div className='footer-link'>
                                <Link className='footer-link' to='/'> Contact</Link>
                                <Link className='footer-link' to='/'> Support</Link>
                                <Link className='footer-link' to='/'> Destinations</Link>
                            </div>
                        </div>
                    </div>
                    <div className='footerlinks-wrapper'>
                        <div className='footer-link-items'>
                            <div className='footer-link-title'>Videos</div>
                            <div className='footer-link'>
                                <Link className='footer-link' to='/'> Agency</Link>
                                <Link className='footer-link' to='/'>Influencer</Link>
                                <Link className='footer-link' to='/'> Ambassadors</Link>
                            </div>
                        </div>
                        <div className='footer-link-items'>
                            <div className='footer-link-title'>Social Media</div>
                            <div className='footer-link'>
                                <Link className='footer-link' to='/'> Instagram</Link>
                                <Link className='footer-link' to='/'> Youtube</Link>
                                <Link className='footer-link' to='/'> Twitter</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='social-media'>
                    <div className='social-media-wrap'>
                        <Link className='social-logo' to='/'> MentorOn</Link>
                        <div className='website-rights'> MentorOn © {new Date().getFullYear} This Lighthouse Labs Final project is made by Anna Kon, Naga Abirami Manimaran and Zeynep Kaya.</div>
                        <div className='social-icons'>
                            <Link className='social-icon-link' to='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </Link>
                            <Link className='social-icon-link' to='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube/>
                            </Link>
                            <Link className='social-icon-link' to='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </Link>
                            <Link className='social-icon-link' to={{ pathname: "https://github.com/abiramitoronto/mentorOn" }} target='_blank' aria-label='Github'>
                                <FaGithub/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;