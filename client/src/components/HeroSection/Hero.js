import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom';
import Video from '../../Video/video.mp4'

const Hero = () => {
    return (
        <div className="home">
            <video className="video-home" autoPlay loop muted src={Video} type='video/mp4'></video>
            <div className="home-container">
                <div className="home-content">
                    <h1>1-on-1 Mentorship</h1>
                    <p>Master your craft with leading mentors at your side. Grow with every online mentoring session and take the next step in your career. All on your terms, for a flat monthly price.</p>
                    <div className="home-wrapper">
                        <ul>
                            <Link className='getstarted-link' to="/login">Get started</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero