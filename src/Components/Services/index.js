import React, { Component } from 'react'
import './index.css'
import ServicesItem from '../ServicesItem'

const serviceData = 
    [
    {
        "id": 1,
        "title": "High Speed Internet",
        "image": "https://as2.ftcdn.net/jpg/00/95/60/63/1000_F_95606315_NKoCg7EO0nCCk4MeaKKMk7MmEUNuxLbA.jpg",
        "description": "Stay connected with high-speed internet in every room, perfect for work or leisure. Whether you're streaming your favorite shows or attending virtual meetings, we’ve got you covered!"
    },
    {
        "id": 2,
        "title": "Healthy Meals",
        "image": "https://cdn-icons-png.freepik.com/256/1687/1687011.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Enjoy a variety of delicious, nutritious meals prepared with fresh, local ingredients. Our chef focuses on balancing taste and health in every dish."
    },
    {
        "id": 3,
        "title": "Homely Stay",
        "image": "https://cdn-icons-png.freepik.com/256/13779/13779729.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Feel right at home with our cozy rooms, personalized service, and inviting atmosphere. Our goal is to make sure you enjoy the comfort and warmth of a homely environment."
    },
    {
        "id": 4,
        "title": "Transportation",
        "image": "https://cdn-icons-png.freepik.com/256/1855/1855658.png?ga=GA1.1.86401077.1731227688&semt=ais_hybr",
        "description": "Get around effortlessly with our convenient transportation services. Whether you need a ride to the airport or a tour of the city, we’ve got you covered with reliable and safe transportation options."
    },
    {
        "id": 5,
        "title": "Food Delivery",
        "image": "https://cdn-icons-png.freepik.com/256/5637/5637241.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Order food right to your room with our fast and reliable food delivery service. Choose from a variety of cuisines and enjoy a relaxing meal in the comfort of your room."
    },
    {
        "id": 6,
        "title": "Tourism",
        "image": "https://cdn-icons-png.freepik.com/256/2560/2560124.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Discover the beauty of our location with guided tours. From historical landmarks to scenic views, we offer tailored experiences to ensure you make the most of your visit."
    },
    {
        "id": 7,
        "title": "Job Assistance",
        "image": "https://cdn-icons-png.freepik.com/256/3135/3135680.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Looking for job opportunities? We offer job assistance services, connecting you with local employers and helping you explore employment options during your stay."
    } ,
    {
        "id": 8,
        "title": "Rental Service",
        "image": "https://cdn-icons-png.freepik.com/256/11823/11823576.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Whether you need a car, bicycle, or any other rental service, we offer flexible rental options to make your stay more convenient and enjoyable."
    },
    {
        "id": 9,
        "title": "Online Shop",
        "image": "https://cdn-icons-png.freepik.com/256/3737/3737372.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Shop for a variety of products, from local souvenirs to daily essentials, all available through our online shop. Get it delivered to your room or pick it up at the concierge."
    },
    {
        "id": 10,
        "title": "Good Reviews",
        "image": "https://cdn-icons-png.freepik.com/256/15640/15640536.png?ga=GA1.1.86401077.1731227688&semt=ais_hybrid",
        "description": "Our guests rave about their experiences with us! With excellent reviews on service, cleanliness, and overall satisfaction, we take pride in creating memorable stays for everyone."
    }
    ]
  
  

class Services extends Component {
  render() {
    return (
    <div className='services-container'>
        <h1 className='service-heading'>Services</h1>
        <div className='service-card'>
            <ul className='service-list-container'>
                {

                serviceData.map((eachService) => (
                    <ServicesItem
                    key = {eachService.id}
                    serviceDetails = {eachService}

                    
                    />
                ))
                }

            </ul>

        </div>
        
    </div>
    )
}
}

export default Services