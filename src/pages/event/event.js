import "./event.css"
import rightArrow from "../../assets/icons/right-arrow-white.png"
import calender from "../../assets/icons/calendar-white.png"
import location from "../../assets/icons/pin.png"

import aboutImg from "../../assets/images/event1.jpg"

import seatIcon from "../../assets/icons/armchair.png"
import moneyIcon from "../../assets/icons/rupee.png"
import foodIcon from "../../assets/icons/food.png"
import musicIcon from "../../assets/icons/music.png"
import drinkIcon from "../../assets/icons/beer.png"
import gameIcon from "../../assets/icons/game.png"
import Footer from "../../components/footer/footer"

 
const Event=()=>{

    return <>

    <div className="event">

        <h1 className="subheading underline event-heading">Christmas Eve</h1>

        <div className="event-header">

            <span>
                <img className="event-header-icon expect-icon" src={rightArrow} alt="" />
                <p>It is a long established fact that a reader will be distracted by the readable content of <br/> a page when looking at its layout. </p>
            </span>

            <span>
                <img className="event-header-icon expect-icon"  src={calender} alt="" />
                <p className="event-date">15-17 Nov </p>
            </span>

            <span>
                <img className="event-header-icon expect-icon"  src={location} alt="" />
                <p className="c-blue">Delhi,India</p>
            </span>
        </div>

        <div className="event-about">
            <div className="event-about-img">
                <img src={aboutImg} alt="" />
            </div>
            <div className="event-about-desc">

                <p className="event-about-head">About</p>

                <p className="event-about-p c-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br />
                It is a long established fact that a reader will be distracted by the readable <br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br />
                It is a long established fact that a reader will be distracted by the readable .</p>

               <div className="event-desc-icons">

                <span>
                    <img className="event-desc-icon" src={seatIcon} alt="" />
                    <h3 className="c-white t-a-center">1000+ seats</h3>
                    <h3 className="c-blue t-a-center">475 Available</h3>
                </span>

                <span>
                    <img className="event-desc-icon" src={moneyIcon} alt="" />
                    <h3 className="c-white t-a-center">Entry Fee</h3>
                    <h3 className="c-blue t-a-center">250/-</h3>
                </span>


               </div>

            </div>
        </div>


        <div className="event-expect">
        <h1 className="subheading underline c-white event-subhead">What to expect</h1>

        <div className="event-expect-items">

            <span>
                <img  src={musicIcon} alt="" />
                <p className="c-orange t-a-center expect-item-name ">Music</p>
            </span>

            <span>
                <img src={foodIcon} alt="" />
                <p className="c-orange t-a-center expect-item-name">Food</p>
            </span>

            <span>
                <img src={drinkIcon} alt="" />
                <p className="c-orange t-a-center expect-item-name">Drinks</p>
            </span>

            <span>
                <img src={gameIcon} alt="" />
                <p className="c-orange t-a-center expect-item-name">Game</p>
            </span>

        </div>
        </div>


        <div className="event-schedule">
        <h1 className="subheading underline c-white event-subhead">Schedule</h1>

        <div className="event-schedule-body">

            <div className="schedule-dates">

                <p className="btn-blue">15-Nov</p>
                <br />
                <p className="btn-blue">15-Nov</p>

            </div>
            <div className="schedule-desc">
                <div className="schedule-desc-box">
                    
                </div>
            </div>

        </div>

       
        </div>

        <button className="primary-btn book-btn">Book</button>



        <Footer/>



       
    </div>
    
    </>


}

export default Event