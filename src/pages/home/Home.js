import "./Home.css"
import landingImg from "../../assets/images/landing.jpg"
import EventGallery from "../../components/navbar/eventgallery/EventGallery"
import Stats from "../../components/stats/Stats"
import Footer from "../../components/footer/footer"
import { useNavigate } from "react-router-dom"
const Home = () => {


    const navigate=useNavigate();
    return (

        <>
            <div className="home">
                <div className="home-top">

                    <div className="home-top-left">

                        <div className="home-top-desc">
                            <h1 className="heading-xl">Management <br /> Made Easy</h1>
                            <p>It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its layout. </p>

                            <div className="home-top-buttons">
                                <button className="secondary-btn">Explore Events</button>
                                <button onClick={()=>navigate("/event/create")} className="primary-btn">Create Events</button>
                            </div>


                        </div>

                    </div>

                    <div className="home-top-right">

                        <img src={landingImg} alt="" />

                    </div>




                </div>


                <div className="ongoing-events">

                    <div className="ongoing-events-header">
                        <p className="subheading underline">Ongoing Events</p>
                        <input className="search" type="text" placeholder="Search Event by Name , type ,location...." />

                        {/* <input className="search" type="text" placeholder="" /> */}
                    </div>

                    <EventGallery />

                    <div className="ongoing-events-body">

                    </div>

                </div>



                <Stats />

                <div className="ongoing-events">

                    <div className="ongoing-events-header">
                        <p className="subheading underline">Upcoming Events</p>
                        <input className="search" type="text" placeholder="Search Event by Name , type ,location...." />

                        {/* <input className="search" type="text" placeholder="" /> */}
                    </div>

                    <EventGallery />

                    <div className="ongoing-events-body">

                    </div>

                </div>

               <Footer/>






            </div>

        </>
    )
}

export default Home