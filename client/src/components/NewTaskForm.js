import {useState} from "react";

export default function NewTaskForm ({trip, setTasks, tasks}) {
    
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
        fetch("/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(taskForm),
          }).then(response => response.json())
          .then(data => console.log(data))
        setTaskForm(defaultTaskData)
    }

    return (
        <div>
            <form onSubmit={e => handleAddTask(e)}>
                <label>Name</label>
                <input id="new-task-name" name="name" value={taskForm.name} placeholder="Name Your Task" onChange={handleChange}></input>
                <label>Description</label>
                <input id="new-task-description" name="description" value={taskForm.description} placeholder="What needs to be done?" onChange={handleChange}></input>
                <label>Due Date</label>
                <input id="new-task-due-date" name="due_date" value={taskForm.due_date} onChange={handleChange} placeholder="How early should it be done?" style={{width: 175}}></input>
                <button>Add it to the List!</button>
            </form>
        </div>
    )
}