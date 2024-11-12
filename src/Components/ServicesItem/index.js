import React from 'react'

import './index.css'

const ServicesItem = props=> {
    const {serviceDetails} = props

    const {title, image, description} = serviceDetails
  return (
    <li className='list-service-item'>
        <img src={image} alt='icon' className='service-icon'/>
        <h1 className='services-heading'>{title}</h1>
        <p className='services-text'>{description}</p>
      
    </li>
  )
}

export default ServicesItem
