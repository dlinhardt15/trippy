import TaskCard from "./TaskCard";
import {useEffect, useState} from "react";
import NewTaskForm from "./NewTaskForm";
import '../css/TripCard.css';

export default function TripCard ({trip, handleDelete}) {
    // const today = (new Date().toISOString().slice(0, 10))
    console.log(typeof trip.departure_date)
    const [expandTasks, setExpandTasks] = useState(false)
    const [expandForm, setExpandForm] = useState(false)
    const [myTasks, setMyTasks] = useState([])

    const tripTasks = async () => {
        const allTasks = await trip.method_tasks.concat(trip.tasks)
        const sortedTasks = await allTasks.sort((a, b) => (a.due_date > b.due_date ? -1 : 1))
        setMyTasks(sortedTasks)
    }

    useEffect(() => {
        tripTasks()
    }, [])

    function handleExpandTasks () {
        setExpandTasks(expandTasks ? false : true)
    }

    function handleExpandForm () {
        setExpandForm(expandForm ? false : true)
    }

    return (
        <div id="individual-trip">
            <div className="trip-name">Trip: {trip.name}</div>
            <div className="trip-departure-date">Departure Date: {trip.departure_date}</div>
            <button className="trip-button" onClick={handleExpandTasks}>{expandTasks ? "Hide Tasks" : "Show Tasks"}</button>
            <button className="trip-button" onClick={handleExpandForm}>{expandForm ? "I have enough to do" : "Add a Task"}</button>
            <button className="trip-button" id="delete-trip" onClick={() => handleDelete(trip.id)}>Delete Trip</button>
            {/* {today - trip.departure_date} days left! */}
            {(expandTasks && myTasks.length > 0) ? (
                <div className="trip-tasks">{myTasks.map(task => {
                    return (
                        <TaskCard setTasks={setMyTasks} myTasks={myTasks} task={task}/>
                    )
                })}</div>
            ) : null}
            {expandForm ? (<div><NewTaskForm trip={trip}/></div>) : null}
        </div>
    )
}