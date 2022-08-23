import TaskCard from "./TaskCard";
import {useEffect, useState} from "react";
import NewTaskForm from "./NewTaskForm";
import '../css/TripCard.css';
import { DateTime } from "luxon";

export default function TripCard ({trip, handleDelete}) {
    const today = (new Date().toISOString().slice(0, 10))
    const departureDate = (DateTime.fromISO(trip.departure_date))
    const milliseconds = (departureDate - (new DateTime(today)))
    const days = (milliseconds/(86400000))
    const decPart = (`${days}`+"").split(".")[1]
    const hours = ("." + decPart)*24
    const hourCount = Math.round(hours)
    const countdown = (Math.round(days))
    const [expandTasks, setExpandTasks] = useState(false)
    const [expandForm, setExpandForm] = useState(false)
    const [myTasks, setMyTasks] = useState([])
    
    // useEffect(() => {
    //     fetch(`/trips/${trip.id}/tasks`)
    //     .then(response => response.json())
    //     .then(data => setMyTasks(data))
    // }, [])  
    
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

    const countdownFeature = (countdown < 1 && hourCount < 1) ? "Enjoy Your Trip!" : `${countdown} day(s) and ${hourCount} hour(s) until your trip!`;

    return (
        <div id="individual-trip">
            <div className="trip-name">Trip: {trip.name}</div>
            <div className="trip-departure-date">Departure Date: {trip.departure_date}</div>
            <div>{countdownFeature}</div><br></br>
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
            {expandForm ? (<div><NewTaskForm setMyTasks={setMyTasks} myTasks={myTasks} trip={trip}/></div>) : null}
        </div>
    )
}