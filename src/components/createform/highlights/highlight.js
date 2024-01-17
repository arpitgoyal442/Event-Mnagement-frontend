import Accordion from 'react-bootstrap/Accordion';
import AddIcon from "../../../assets/icons/add.png"
import DeleteIcon from "../../../assets/icons/delete.png"
import "./highlight.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

import { convertObjToFormData } from '../../../commonFunction/commonFunction';



function HighlightForm({ submit, stepNo, setStepNo,formData }) {
    const [artists, setArtists] = useState([{
        name: "",
        image: "",
    }]);

    const [speakers, setSpeakers] = useState([
        {
            name: "",
            image: ""
        }
    ]);

    const [attendeeGet, setAttendeeGet] = useState([]);

    const [imageGallery, setImageGallery] = useState("");
    const [judges, setJudges] = useState([{
        name: "",
        image: "",
    }])

    useEffect(()=>{
        setArtists(formData.highlights?.artists||[{
            name: "",
            image: "",
        }])
        setSpeakers(formData.highlights?.speakers||[{
            name: "",
            image: "",
        }])
        setJudges(formData.highlights?.judges||[{
            name: "",
            image: "",
        }])
        setImageGallery(formData.highlights?.imageGallery||"")
        setAttendeeGet(formData.highlights?.attendeeGet||[])

    },[])


    const handleAddArtist = (category) => {
        switch (category) {
            case 'artists':
                setArtists((pre) => { return [...pre, { name: "", image: "" }] });
                break;

            case 'speakers':
                setSpeakers((pre) => { return [...pre, { name: "", image: "" }] });
                break;

            case 'judges':
                setJudges((pre) => { return [...pre, { name: "", image: "" }] });
                break;

            default:
                console.log(`${category} is supported as a category`)
                return

        }
    }

    const handleDeleteArtist = (index, category) => {
        switch (category) {
            case 'artists':
                setArtists((pre) => { return pre.filter((val, i) => i !== index) })
                break;

            case 'speakers':

                setSpeakers((pre) => { return pre.filter((val, i) => i !== index) })

                break;

            case 'judges':

                setJudges((pre) => { return pre.filter((val, i) => i !== index) })

                break;

            default:
                console.log(`${category} is supported as a category`)
                return

        }
    }

    const handleInputChange = (e, index, category) => {
        let name = e.target.name;
        let val;

        if (name === 'name')
            val = e.target.value;

        else val = e.target.files;

        if (name === 'image')
            val = e.target.files

        let field = category;

        let preData;

        switch (field) {

            case 'artists':
                preData = artists;
                preData[index][name] = val;
                setArtists([...preData])

                break
            case 'speakers':
                preData = speakers
                preData[index][name] = val;
                setSpeakers([...preData])
                break;
            case 'judges':
                preData = judges
                preData[index][name] = val;
                setJudges([...preData])
                break;

            default:
                console.log(`${category} is supported as a category`)
                return
        }






    }

    const handleAttendeeChange=(item)=>{

       
        if(attendeeGet.includes(item))
        {

            let filteredData=attendeeGet.filter((i)=>{
                return i!==item
            })

            setAttendeeGet([...filteredData])
        }

        else setAttendeeGet((pre)=>{
            return [...pre,item]
        })
    }
    const preClick=()=>{
        setStepNo((pre) => { return pre - 1 })
        submit({
            artists:artists,
            speakers:speakers,
            judges:judges,
            attendeeGet:attendeeGet,
            imageGallery:imageGallery
        })
    }




    const handleCreateClick=()=>{


        // {
        //     basicDetails:{} //ok
        //     posterImage:formData//

        //     schedule:{}//


        //     highlight:{}

        //     artist-image-1:formData;
            
        // }
    

        // let d=convertObjToFormData(formData)

        let fData=new FormData();

        fData.append("jData",JSON.stringify(formData));
        fData.append('poster',formData.basicDetails.poster);

        artists.forEach((artist)=>{


            fData.append('artists',artist.image[0],artist.name)

        })

        // console.log(d)
       

        axios.post('http://localhost:9000/api/event/create',fData).then((res)=>{console.log(res.data)})
        .catch((e)=>{console.log(e)})
    }

    return (
        <Accordion       >
            <Accordion.Item eventKey="0">
                <Accordion.Header>Artist</Accordion.Header>
                <Accordion.Body>
                    {artists?.map((artist, index) => {
                        return <div className="highlight-artist">
                            <div>
                                <label className='highlight-label' >Name</label>
                                <input name='name' className='highlight-input' type="text" value={artist.name} onChange={(e) => handleInputChange(e, index, 'artists')} />
                            </div>
                            <div>
                                <label className='highlight-label'  >Image</label>
                                <input name='image' className='highlight-input ' multiple={true} type="file" onChange={(e) => handleInputChange(e, index, 'artists')} />
                            </div>
                            <div className="highlight-icons">
                                <img className="highlight-artist-addicon" src={AddIcon} alt="" onClick={() => handleAddArtist('artists')} />
                                <img className="highlight-artist-deleteicon" src={DeleteIcon} alt="" onClick={() => handleDeleteArtist(index,'artists')} />
                            </div>
                        </div>
                    })}

                </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="1">
                <Accordion.Header>Speaker</Accordion.Header>
                <Accordion.Body>

                    {speakers?.map((speaker, index) => {
                        return <div className="highlight-artist">
                            <div>
                                <label className='highlight-label' htmlFor="">Name</label>
                                <input name='name' className='highlight-input' type="text" value={speaker.name} onChange={(e) => handleInputChange(e, index, 'speakers')} />
                            </div>
                            <div>
                                <label className='highlight-label' htmlFor="">Image</label>
                                <input name='image' className='highlight-input' type="file" onChange={(e) => handleInputChange(e, index, 'speakers')} />
                            </div>
                            <div className="highlight-icons">
                                <img className="highlight-artist-addicon" src={AddIcon} alt="" onClick={() => handleAddArtist('speakers')}/>
                                <img className="highlight-artist-deleteicon" src={DeleteIcon} alt="" onClick={() => handleDeleteArtist(index,'speakers')}   />
                            </div>
                        </div>
                    })}

                </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="2">
                <Accordion.Header>Attendee Will Get</Accordion.Header>
                <Accordion.Body>
                    <div className='attendee-get'>
                        <label>
                            <input
                                type="checkbox"
                                checked={attendeeGet.includes('food')}
                                onChange={()=>handleAttendeeChange('food')}
                            />
                            Food
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={attendeeGet.includes('music')}
                                onChange={()=>handleAttendeeChange('music')}
                            />
                            Music
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={attendeeGet.includes('drinks')}
                                onChange={()=>handleAttendeeChange('drinks')}
                            />
                            Drinks
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={attendeeGet.includes('games')}
                                onChange={()=>handleAttendeeChange('games')}

                            />
                            Games
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={attendeeGet.includes('gifts')}
                                onChange={()=>handleAttendeeChange('gifts')}
                            />
                            Gifts
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={attendeeGet.includes('dj')}
                                onChange={()=>handleAttendeeChange('dj')}
                            />
                            DJ
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={attendeeGet.includes('prize')}
                                onChange={()=>handleAttendeeChange('prize')}
                            />
                            Prize
                        </label>
                    </div>

                </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="3">
                <Accordion.Header>Image Gallery</Accordion.Header>
                <Accordion.Body>

                    <label htmlFor="">Upload Images from previous events (max 6 allowed)</label>
                    <br />

                    <input type="file" onChange={(e)=>setImageGallery(e.target.files)} multiple={true} />

                </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="4">
                <Accordion.Header>Judges</Accordion.Header>
                <Accordion.Body>

                    {judges?.map((judge, index) => {

                        return <div className="highlight-artist">
                            <div>
                                <label className='highlight-label' htmlFor="">Name</label>
                                <input name='name' className='highlight-input' type="text" value={judge.name} onChange={(e) => handleInputChange(e, index, 'judges')} />
                            </div>
                            <div>
                                <label className='highlight-label' htmlFor="">Image</label>
                                <input name='image' className='highlight-input' type="file" onChange={(e) => handleInputChange(e, index, 'judges')} />
                            </div>
                            <div className="highlight-icons">
                                <img className="highlight-artist-addicon" src={AddIcon} alt="" onClick={() => handleAddArtist('judges')}/>
                                <img className="highlight-artist-deleteicon" src={DeleteIcon} alt="" onClick={() => handleDeleteArtist(index,'judges')} />
                            </div>
                        </div>
                    })}
                </Accordion.Body>
            </Accordion.Item>
            <div className="pre-nex-btn">
                <button onClick={preClick} className="primary-btn">Previous</button>
                <button onClick={handleCreateClick} className="primary-btn">Create</button>
            </div>

        </Accordion>
    );
}

export default HighlightForm;