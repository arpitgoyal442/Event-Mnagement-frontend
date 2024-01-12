import "./createevent.css"
import createEventImg from "../../assets/images/createevent.jpg"
import BasicDetails from "../../components/createform/basicdetails/basicdetails"
import Footer from "../../components/footer/footer"
import ScheduleForm from "../../components/createform/schedule/schedule"
import HighlightForm from "../../components/createform/highlights/highlight"
import { useEffect, useState } from "react"
const CreateEvent = () => {

    const [stepNo, setStepNo] = useState(1);
    const [formData,setFormData]=useState({
        basicDetails:{},
        schedule:{},
        highlights:{},
    });

    const handleBasicDetails=(basicdetails)=>{
        setFormData({...formData,basicDetails:basicdetails})
    }

    const handleSchedule=(schedule)=>{
        setFormData({...formData,schedule:schedule})
    }

    const handlehighlights=(highlights)=>{
        setFormData({...formData,highlights:highlights})
    }

    useEffect(()=>{

        // console.log(formData)

    },[stepNo])

    return (

        <div className="createevent">

            <div className="createevent-head">

                <div className="createevent-head-left">

                    <h1 className="heading-xl">Create Event</h1>
                    <p>It is a long established fact that a reader will be distracted<br /> by the readable content of a page when looking at its layout. </p>

                    <div className="createevent-head-points">
                        <li >Create event within 5 minutes .</li>
                        <li>Add/Remove the required field you want .</li>
                    </div>
                </div>
                <div className="createevent-head-right">
                    <img src={createEventImg} alt="" />
                </div>

            </div>

            <div className="createevent-tabs">

                <p onClick={() => { setStepNo(1) }} className={stepNo === 1 ? "subheading focus" : "subheading"}  >1.Basic Details</p>
                <p onClick={() => { setStepNo(2) }} className={stepNo === 2 ? "subheading focus" : "subheading"}>2.Schedule</p>
                <p onClick={() => { setStepNo(3) }} className={stepNo === 3 ? "subheading focus" : "subheading"}>3.Highlights</p>
            </div>

            <div className="createevent-form">

                {stepNo == 1 && <BasicDetails submit={handleBasicDetails} stepNo={stepNo} setStepNo={setStepNo} formData={formData} />}

                {stepNo == 2 && <ScheduleForm submit={handleSchedule} stepNo={stepNo} setStepNo={setStepNo} formData={formData}/>}

                {stepNo == 3 && <HighlightForm submit={handlehighlights} stepNo={stepNo} setStepNo={setStepNo} formData={formData} />}

                {/* <div className="pre-nex-btn">
                    <button onClick={() => setStepNo((pre) => { return pre - 1 })} className="primary-btn">Previous</button>
                    <button onClick={() => setStepNo((pre) => { if (pre !== 3) { return pre + 1 } else return pre })} className="primary-btn">{stepNo === 3 ? "Create" : "Next"}</button>
                </div> */}

            </div>

            <Footer />


        </div>
    )
}

export default CreateEvent