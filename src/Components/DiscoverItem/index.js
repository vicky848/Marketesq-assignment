import React from 'react'
import { FaStar } from "react-icons/fa6";
import './index.css'

const DiscoverItem = props => {

    const {reviewItemDetails} = props

    const {photo_url,reviewer_name, stars, review_text } = reviewItemDetails


return (
    <li className='list-item'>
        <img src = {photo_url}  alt="review" className = 'image-url'/>
        <h1 className='review-heading'>{reviewer_name}</h1>
        <div className='stars'>
        {[...Array(stars)].map((_, index) => (
        <FaStar key={index} className='star-icon' />
        ))}
</div>
        <p className='review-text'>{review_text}</p>


    </li>
)
}

export default DiscoverItem
