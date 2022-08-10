import {useState} from "react";

export default function TripCard ({trip}) {
    // console.log(trip)
    const [complete, setComplete] = useState(false)

    function handleComplete (e) {
        console.log(e)
        setComplete(complete ? false : true)
    }

    return (
        <div>
            <div className="trip-name">Trip: {trip.name}</div>
            <div className="trip-departure-date">Departure Date: {trip.departure_date}</div>
            <div className="trip-tasks">{trip.method_tasks.map(task => {
                return (
                    <div key={task.id}>
                        <p>Task: {task.name}</p>
                        <p>Description: {task.description}</p>
                        <p>Due Date: {task.due_date} days before trip</p>
                        <p>Complete: <span onClick={handleComplete}>{complete ? "✅" : "❌"}</span></p>
                    </div>
                )
            })}</div>
        </div>
    )
}