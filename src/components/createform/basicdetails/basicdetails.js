import { useEffect, useState } from "react"
import "./basicdetails.css"
const BasicDetails=({submit,stepNo,setStepNo,formData})=>{

    console.log("At Basic Details")
    console.log("Form Data is");
    console.log(formData)

    const [basicData,setBasicData]=useState({

        title:"",
        location:"",
        date:"",
        entryFee:"",
        numSeats:"",
        shortDesc:"",
        longDesc:"",
        poster:null
    });

    // setBasicData({...formData.BasicDetails})

    useEffect(()=>{

        console.log("Inside useEffect");
        console.log(formData)

        setBasicData(formData.basicDetails)

    },[formData])

    const handleInputChange=(e)=>{

        let name=e.target.name;
        let value=e.target.value;

        setBasicData((pre)=>{

            return {...pre,[name]:value}
        })

    }

    const handleImageChange=(e)=>{
        
        let file=e.target.files[0];

        setBasicData((pre)=>{
            return {...pre,poster:file}
        })
    }

    const preClick=()=>{
        setStepNo((pre) => { return pre - 1 })
        submit(basicData)
    }

    const nextClick=()=>{

        setStepNo((pre) => {   if (pre !== 3) { return pre + 1 } else return pre })
        submit(basicData)

    }


    return (

        <>
        <div className="basicdetail">

            <div>
                <label htmlFor="">Title</label>
                <input name="title" value={basicData?.title} onChange={handleInputChange} type="text" />
            </div>

            <div>
                <label htmlFor="">Location</label>
                <input name="location" value={basicData?.location} type="text" onChange={handleInputChange} />
            </div>

            <div>
                <label htmlFor="">Date</label>
                <input name="date" value={basicData?.date} onChange={handleInputChange} type="date" />
            </div>

            <div>
                <label htmlFor="">Entry Fee</label>
                <input name="entryFee" value={basicData?.entryFee} onChange={handleInputChange} type="text" />
            </div>

            <div>
                <label htmlFor="">No. of Seats</label>
                <input name="numSeats" value={basicData?.numSeats} type="text" onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="">Poster/Image</label>
                <input name="poster" onChange={handleImageChange}  type="file" />
            </div>

            <div>
                <label htmlFor="">Short Description</label>
                <textarea name="shortDesc" value={basicData?.shortDesc} id="" cols="80" rows="2" onChange={handleInputChange}></textarea>
            </div>

            <div>
                <label htmlFor="">Long Description</label>
                <textarea name="longDesc" value={basicData?.longDesc} id="" cols="80" rows="4" onChange={handleInputChange}></textarea>
            </div>

        </div>
        <div className="pre-nex-btn">
                    <button onClick={preClick} className="primary-btn">Previous</button>
                    <button onClick={nextClick} className="primary-btn">{stepNo === 3 ? "Create" : "Next"}</button>
                </div>
        </>
    )
}

export default BasicDetails