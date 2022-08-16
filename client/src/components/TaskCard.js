// import {useState} from "react";

export default function TaskCard ({task, setTasks, myTasks}) {

    function findTask (data) {
        const updatedTasks = myTasks.map(task => {
            if (task.name == data.name && task.description == data.description && task.id == data.id) {
                return {...task, complete: data.complete}
            }
            return task
        })
        setTasks(updatedTasks)
    }


    function handleUpdate (task) {
        if ("travel_method_id" in task) {
            fetch(`/methodtasks/${task.id}`, {
                method: "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({complete: task.complete ? false : true})
            })
            .then(response => response.json())
            .then(data => findTask(data))
    }   else {  
            fetch(`/tasks/${task.id}`, {
                method: "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({complete: task.complete ? false : true})
            })
            .then(response => response.json())
            .then(data => findTask(data))
    }
    }

    return (
        <div>
            <p>Task: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Due Date: {task.due_date} days before trip</p>
            <p>Complete: <span onClick={() => handleUpdate(task)}>{task.complete ? "✅" : "❌"}</span></p>
        </div>
    )
}