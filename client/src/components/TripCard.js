import TaskCard from "./TaskCard";
import {useState} from "react";
import NewTaskForm from "./NewTaskForm";

export default function TripCard ({trip, handleDelete}) {
    // console.log(trip)
    const [expandTasks, setExpandTasks] = useState(false)
    const [expandForm, setExpandForm] = useState(false)
    const allTasks = trip.method_tasks.concat(trip.tasks)
    const sortedTasks = allTasks.sort((a, b) => (a.due_date > b.due_date ? -1 : 1))
    
    function handleExpandTasks () {
        setExpandTasks(expandTasks ? false : true)
    }
    function handleExpandForm () {
        setExpandForm(expandForm ? false : true)
    }

    return (
        <div>
            <div className="trip-name">Trip: {trip.name}</div>
            <div className="trip-departure-date">Departure Date: {trip.departure_date}</div>
            <button onClick={handleExpandTasks}>{expandTasks ? "Hide Tasks" : "Show Tasks"}</button>
            {expandTasks ? (
                <div className="trip-tasks">{sortedTasks.map(task => {
                    return (
                        <TaskCard task={task}/>
                    )
                })}</div>
            ) : null}
            <button onClick={handleExpandForm}>{expandForm ? "I have enough to do" : "Add a Task"}</button>
            {expandForm ? (<div><NewTaskForm trip={trip}/></div>) : null}
            <button id="delete-trip" onClick={() => handleDelete(trip.id)}>Delete Trip</button>
            
        </div>
    )
}