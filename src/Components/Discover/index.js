import{ Component } from 'react'

import './index.css'
import DiscoverItem from '../DiscoverItem'

const  reviewData =   [
    {   
        "id": 1,
        "reviewer_name": "Alice Smith",
        "stars": 5,
        "review_text": "Absolutely loved my stay! The rooms were spotless, and the service was top-notch. Highly recommended!",
        "photo_url": "https://cdn.pixabay.com/photo/2019/08/11/11/28/man-4398724_960_720.jpg"
    },
    {

        "id": 2,
        "reviewer_name": "John Doe",
        "stars": 4,
        "review_text": "Great location and friendly staff. The breakfast was amazing, though the room was a bit small.",
        "photo_url": "https://cdn.pixabay.com/photo/2019/10/22/13/43/portrait-4568762_1280.jpg"
    },
    {
        "id": 3,
        "reviewer_name": "Maria Garcia",
        "stars": 5,
        "review_text": "Beautiful hotel with excellent amenities. The spa experience was rejuvenating. Will definitely return!",
        "photo_url": "https://images.pexels.com/photos/29084945/pexels-photo-29084945/free-photo-of-smiling-male-portrait-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "id": 4,
        "reviewer_name": "James Lee",
        "stars": 4,
        "review_text": "Very comfortable stay. The staff was attentive, and the view from my room was stunning!",
        "photo_url": "https://images.pexels.com/photos/27385953/pexels-photo-27385953/free-photo-of-smiling-man-in-a-blue-polo-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 5,
        "reviewer_name": "Linda Brown",
        "stars": 5,
        "review_text": "Fantastic experience! The hotel exceeded all my expectations in terms of comfort and service.",
        "photo_url": "https://images.pexels.com/photos/15030875/pexels-photo-15030875/free-photo-of-grayscale-portrait-of-a-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 6,
        "reviewer_name": "Robert Davis",
        "stars": 4,
        "review_text": "Lovely hotel with a warm ambiance. The pool area was especially relaxing, though it got crowded in the evening.",
        "photo_url": "https://images.pexels.com/photos/17388092/pexels-photo-17388092/free-photo-of-smiling-man-with-moustache.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 7,
        "reviewer_name": "Jennifer Wilson",
        "stars": 5,
        "review_text": "Perfect location, amazing food, and impeccable service. Truly a memorable stay!",
        "photo_url": "https://images.pexels.com/photos/18269632/pexels-photo-18269632/free-photo-of-man-wearing-casual-outfit-with-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 8,
        "reviewer_name": "Michael Clark",
        "stars": 4,
        "review_text": "Clean rooms and excellent service. The concierge was very helpful with recommendations.",
        "photo_url": "https://images.pexels.com/photos/20336716/pexels-photo-20336716/free-photo-of-man-sitting-on-red-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 9,
        "reviewer_name": "Sarah Lewis",
        "stars": 5,
        "review_text": "The decor was beautiful, and the hospitality was exceptional. A wonderful getaway destination!",
        "photo_url": "https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 10,
        "reviewer_name": "David Walker",
        "stars": 5,
        "review_text": "Outstanding experience! The staff went above and beyond to make my stay comfortable and enjoyable.",
        "photo_url": "https://images.pexels.com/photos/16135588/pexels-photo-16135588/free-photo-of-photo-of-a-man-in-a-white-t-shirt-holding-a-vintage-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 11,
        "reviewer_name": "Emma Robinson",
        "stars": 5,
        "review_text": "A delightful experience! Everything from the room to the facilities was excellent. Will recommend to friends!",
        "photo_url": "https://images.pexels.com/photos/18999207/pexels-photo-18999207/free-photo-of-portrait-of-man-taking-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 12,
        "reviewer_name": "Daniel Martinez",
        "stars": 4,
        "review_text": "Great value for the price. Loved the rooftop terrace and the view was stunning!",
        "photo_url": "https://images.pexels.com/photos/16862147/pexels-photo-16862147/free-photo-of-man-posing-in-a-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]







 class  Discover  extends Component {
  render() {
    return (
        <div className = "discover-container">
        <h1 className='discover-heading'>Discover</h1>
        <div className='discover-card'>
          <ul className='list-container'>
            {
                
               
                
              reviewData.map((eachItem) => (
                <DiscoverItem
                key={eachItem.id}
                reviewItemDetails = {eachItem}
                
                />
              ))    
                
                
                
            
            }
          </ul>
  
        </div>
        </div>
    )
  }
}




export default Discover
