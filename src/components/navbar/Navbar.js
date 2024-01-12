

import "./Navbar.css"

import userIcon from "../../assets/icons/user.png"

import {useNavigate} from "react-router-dom"

const Navbar=()=>{

    const navigate=useNavigate();

    return <>

       <div className="navbar wfs">

        <div className="navbar-options">

            <p className="navbar-option">Contact Us</p>
            <p className="navbar-option">About</p>
            <p onClick={()=>navigate("/home")} className="navbar-option">Home</p>
            <img className="navbar-usericon" src={userIcon} alt="userImage" />
        </div>


       </div>
    </>
}



export default Navbar