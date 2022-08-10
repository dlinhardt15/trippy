import TaskCard from "./TaskCard";
import {useState} from "react";

export default function TripCard ({trip}) {
    // console.log(trip)
    const [expand, setExpand] = useState(false)

    function handleExpand () {
        setExpand(expand ? false : true)
    }

    return (
        <div>
            <div className="trip-name">Trip: {trip.name}</div>
            <div className="trip-departure-date">Departure Date: {trip.departure_date}</div>
            <button onClick={handleExpand}>Show Tasks</button>
            {expand ? (
                <div className="trip-tasks">{trip.method_tasks.map(task => {
                    return (
                        <TaskCard task={task} />
                    )
                })}</div>
            ) : null}
            
            
        </div>
    )
}