
import event1 from "../../../assets/images/event1.jpg"
import event2 from "../../../assets/images/event2.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./EventGallery.css"

import {useNavigate} from "react-router-dom"
 



import Slider from "react-slick"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "", backgroundColor:"black"  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (

      <div
        className={className}
        style={{ ...style, color:"white", display: "block", backgroundColor:"black" }}
        onClick={onClick}
      />
    );
  }



const EventGallery = () => {

  const navigate=useNavigate();


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
      };

      
 
    return (

        <>
            <div className="eventgallery" >
                <Slider {...settings}  >

                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}}>
                    <img className="eventImg"  src={event1} alt="" />
                    <p>Christmas Eve</p>
                </div>

                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}}>
                    <img className="eventImg" src={event2} alt="" />
                    <p>Christmas Eve</p>

                </div>
                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}}>
                    <img className="eventImg" src={event1} alt="" />
                    <p>Christmas Eve</p>

                </div>

                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}} >
                    <img className="eventImg" src={event2} alt="" />
                    <p>Christmas Eve</p>

                </div>
                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}}>
                    <img className="eventImg" src={event1} alt="" />
                    <p>Christmas Eve</p>

                </div>

                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}} >
                    <img className="eventImg" src={event2} alt="" />
                    <p>Christmas Eve</p>

                </div>
                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}} >
                    <img className="eventImg" src={event1} alt="" />
                    <p>Christmas Eve</p>

                </div>

                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}} >
                    <img className="eventImg" src={event2} alt="" />
                    <p>Christmas Eve</p>

                </div>
                <div className="eventgallery-event" onClick={()=>{navigate("/event/1")}} >
                    <img className="eventImg" src={event1} alt="" />
                    <p>Christmas Eve</p>

                </div>

                </Slider>

                {/* <p className="viewAll">View All...</p> */}

            </div>
        </>
    )
}

export default EventGallery