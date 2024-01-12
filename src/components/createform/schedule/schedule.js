import "./schedule.css"
import _, { set } from "lodash"

import AddIcon from "../../../assets/icons/add.png"
import DeleteIcon from "../../../assets/icons/delete.png"
import CrossIcon from ".././../../assets/icons/x-mark.png"
import { useEffect, useState } from "react"

const ScheduleForm = ({submit,stepNo,setStepNo,formData}) => {

    const[data,setData]=useState({
        "2023-12-15":[
            {time:"",title:"",desc:""}
        ], 
    });

    useEffect(()=>{
        setData(formData.schedule)
    },[formData])

    const [selectedDate,setSelectedDate]=useState("");

    const handleAddDate=()=>{

        setData((pre)=>{

            return {...pre , "":[{time:"",title:"",desc:""}]}
        })
    }

    const handleDeleteDate=(date)=>{
        let tempData={...data};
         delete tempData[date]
        //  setSelectedDate(()=>{return "No date selected"})
        setData(tempData)

        if(date===selectedDate)
        {
           alert("selected this")
           setSelectedDate(()=>{

               console.log("Inside");
               return ""
           })
           console.log("selectedDate si");
           console.log(selectedDate)
        }


    }

    const handleDateChange=(e,index)=>{
        let tempData={};
        let i=0;
       for(let key in data){
        if(i==index){
            tempData[e.target.value]=data[key];
            i++;
            continue;
        }
        tempData[key]=data[key]
        i++;
       }

       setSelectedDate(e.target.value)
       setData({...tempData})

    }

    const hndlSchInptChng=(e,item,index)=>{

        let name=e.target.name;
        let val=e.target.value;

        let selectedDateArr=data[selectedDate];  //[ {title:""} , {title:""}]

        selectedDateArr[index][name]=val;

        let tempData={...data};

        tempData[selectedDate]=selectedDateArr;

        setData(tempData)

    }

    const handleTimeAdd=()=>{

        let tempData={...data};

        tempData[selectedDate].push({time:"",title:"",desc:""})

        setData(tempData)

    }

    const handleTimeDel=(index)=>{
        let tempData={...data};
        tempData[selectedDate].splice(index,1)
        setData(tempData)


    }

    const preClick=()=>{
        setStepNo((pre) => { return pre - 1 })
        submit(data)
    }

    const nextClick=()=>{
        setStepNo((pre) => {   if (pre !== 3) { return pre + 1 } else return pre })
        submit(data)

    }

    return (

        <div className="scheduleform">


            <div className="scheduleform-dates">
                <p className="subheading ">Date</p>
                <img onClick={handleAddDate} className="date-addicon" src={AddIcon} alt="" />
            </div>

            {Object.keys(data).map((date,index)=>{

                return <> <div className={selectedDate==date?"focusdate scheduleform-adate":"scheduleform-adate"} onClick={()=>{setSelectedDate(date)}}>
                <input  type="date" value={date} onChange={(e)=>handleDateChange(e,index)} />
                
            </div>
            <img className="schedule-adate-crossIcon" onClick={()=>handleDeleteDate(date)} src={CrossIcon} alt="" /></>
            })}
           
            {selectedDate &&    <div className="scheduleform-desc">
                <p className="scheduleform-selecteddate ">{selectedDate!==""?selectedDate:"No date selected"}</p>

                
                {data[selectedDate].map((item,index)=>{

                    return <div className="scheduleform-desc-item">
                    <div>
                        <label htmlFor="">Time</label>
                        <input name="time" type="time" value={item.time} onChange={(e)=>hndlSchInptChng(e,item,index)} />
                    </div>

                    <div>
                        <label htmlFor="">Title</label>
                        <input name="title" type="text" value={item.title} onChange={(e)=>hndlSchInptChng(e,item,index)} />
                    </div>

                    <div>
                        <label htmlFor="">Short Description</label>
                        <textarea name="desc" id="" cols="40" rows="1" value={item.desc} onChange={(e)=>hndlSchInptChng(e,item,index)}></textarea>
                    </div>


                    <div className="scheduleform-icons">
                       {data[selectedDate].length===(index+1) && <img className="scheduleform-addicon" onClick={handleTimeAdd} src={AddIcon} alt="" />}
                        <img className="scheduleform-deleteicon" src={DeleteIcon} onClick={()=>handleTimeDel(index)} alt="" />
                    </div>


                </div>
                })}

                {/* <div className="scheduleform-desc-item">
                    <div>
                        <label htmlFor="">Time</label>
                        <input type="time" />
                    </div>

                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Short Description</label>
                        <textarea name="" id="" cols="40" rows="1"></textarea>
                    </div>


                    <div className="scheduleform-icons">
                        <img className="scheduleform-addicon" src={AddIcon} alt="" />
                        <img className="scheduleform-deleteicon" src={DeleteIcon} alt="" />
                    </div>


                </div> */}
            </div>}
            <div className="pre-nex-btn">
                    <button onClick={preClick} className="primary-btn">Previous</button>
                    <button onClick={nextClick} className="primary-btn">{stepNo === 3 ? "Create" : "Next"}</button>
                </div>

        </div>
    )


}

export default ScheduleForm;