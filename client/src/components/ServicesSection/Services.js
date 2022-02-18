import React from 'react'
import './Services.css'
import Icon1 from '../../Icons/icon1.jpg'
import Icon2 from '../../Icons/icon2.jpg'
import Icon3 from '../../Icons/icon3.jpg'

const Services = () => {
  return (
    <div className='services-container'>
      <h1 className='services-h1'>Our Services</h1>
      <div className='services-wrapper'>
        <div className='services-card'>
          <img className='services-icon' src={Icon1}>
          </img>
          <h2 className='services-h2'>Mentorship service</h2>
          <p className='services-p'>Feel free to reach out to your mentor whenever you want.</p>
        </div>
        <div className='services-card'>
          <img className='services-icon' src={Icon2}>
          </img>
          <h2 className='services-h2'>Setting Goals</h2>
          <p className='services-p'>Book an appointment with your mentor and set goals for an month based on your needs.</p>
        </div>
        <div className='services-card'>
          <img className='services-icon' src={Icon3}>
          </img>
          <h2 className='services-h2'>2 Calls A month</h2>
          <p className='services-p'>Book phone appointment at least 2 times a month.</p>
        </div>
      </div>
    </div>
  )
}

export default Services