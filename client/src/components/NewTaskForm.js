import {useState} from "react";
import '../css/NewTaskForm.css';

export default function NewTaskForm ({trip, setMyTasks, myTasks}) {
    
    const defaultTaskData = {
        trip_id: trip.id,
        name: "",
        description: "",
        due_date: "",
        complete: false
    }
    
    const [taskForm, setTaskForm] = useState(defaultTaskData)
    
    function handleChange (e) {
        
        const {name, value} = e.target;
        setTaskForm({...taskForm, [name]: value})
    }

    function handleAddTask (e) {
        // e.preventDefault()
        fetch(`/trips/${trip.id}/tasks`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(taskForm),
          }).then(response => response.json())
          .then(data => setMyTasks([...myTasks, data]))
        setTaskForm(defaultTaskData)
    }

    return (
        <div>
            <form onSubmit={e => handleAddTask(e)} id="new-task-form">
                <label>Name: </label>
                <input className="input-field" id="new-task-name" name="name" value={taskForm.name} placeholder="Name Your Task" onChange={handleChange}></input>
                <br></br><label>Description: </label>
                <input className="input-field" id="new-task-description" name="description" value={taskForm.description} placeholder="What needs to be done?" onChange={handleChange}></input>
                <br></br><label>Due Date: </label>
                <input className="input-field" id="new-task-due-date" name="due_date" value={taskForm.due_date} onChange={handleChange} placeholder="How early should it be done?"></input>
                <br></br><button id="add-task">Add it to the List!</button>
            </form>
        </div>
    )
}