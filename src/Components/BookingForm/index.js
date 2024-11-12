import {Component} from 'react'
import './index.css'
import Navbar from '../Navbar'
import Discover from '../Discover'
import Services from '../Services'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';

class  BookingForm extends Component {

 
    state = {
      
        rooms: 1,
        checkIn: '',
        checkOut: '',
}


handleIncrement = () => {
    this.setState(prevState => ({
        rooms:prevState.rooms + 1
    }))
}



handleDecrement = () => {
    this.setState(prevState => ({
        rooms: Math.max(prevState.rooms-1,1)
    }))
}


handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleBooking = () => {
    const { rooms, checkIn, checkOut } = this.state;
    const { navigate } = this.props;

    navigate('/summary', { state: { rooms, checkIn, checkOut } });
  };








render (){

    const {rooms} = this.state
    return (
   
        <>
        <Navbar/>
        <div className='booking-container'>
         
    
    <div className='card-container'>
        <div>
       <h1 className='booking-heading'>Work From ladakh</h1>
       <p className='booking-text'> India's first true digital tourism ecosystem</p>
    
        </div>
        <img src = "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image'
        
        alt="Ladakh scenic view"
        />
          
        </div> 
        <div className= "form-main-container" >
    
       <form className = "form-container" >
            <div className='check-in-container'>
                <label className='form-label'>CHECK-IN</label>
                <input type='date' name='checkIn' className='form-control'  onChange={this.handleChange}/>
    
            </div>
           < div className='check-out-container'>
                <label className='form-label'>CHECK-OUT</label>
                <input type='date' name='checkIn' className='form-control' onChange={this.handleChange} />
    
            </div>
            < div className='check-out-container'>
                <label className='form-label'>ROOM</label>
               <div className = "room-control">
                <button
                className = "room-button"
                type="button"
                onClick={this.handleDecrement}
                >
                    -
                </button>
                <input
        
                type="number" 
                name="rooms" 
                id="rooms" 
                value={rooms} 
                readOnly 
                className="form-control room-input" 
                
                />
    
    <button
                className = "room-button"
                type="button"
                onClick={this.handleIncrement}
                >
                    +
                </button>
    
    
               </div>
    
            </div>
            <div className = "button-container">
                <button className= "book-button"  onClick={this.handleBooking}>BOOK</button>
            </div>
        </form>
       </div>
       
        </div>
        
          <Discover/>
          <Services/>
          <Footer/>
              
        </>
      )

}
 
}

function BookingFormWithNavigate(props) {

    const navigate = useNavigate();
    return <BookingForm {...props} navigate={navigate} />;
  }
  
  export default BookingFormWithNavigate;
