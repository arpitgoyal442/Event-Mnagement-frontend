
import "./Stats.css"
import calenderIcon from "../../assets/icons/calendar.png"
import locationIcon from "../../assets/icons/location.png"
import groupIcon from "../../assets/icons/group.png"
const Stats = () => {

    const icons = [calenderIcon, locationIcon, groupIcon]

    return (

        <>
            <div className="stats">

                {icons.map((icon) => {

                    return <div className="stats-block">

                        <img src={icon} alt="" />
                        <h2>2000+</h2>
                        <h2>Some random txt</h2>

                    </div>

                })}




            </div>

        </>
    )
}

export default Stats