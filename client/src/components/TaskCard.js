import {useState} from "react";

export default function TaskCard ({task}) {
    const [complete, setComplete] = useState(false)

    function handleUpdate (task) {
        if ("travel_method_id" in task) {
            fetch(`/tasks/${task.id}`, {
                method: "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({complete: complete ? false : true})
            })
            .then(response => response.json())
            .then(data => setComplete(data.complete))
    }   else {
            fetch(`/methodtasks/${task.id}`, {
                method: "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({complete: complete ? false : true})
            })
            .then(response => response.json())
            .then(data => setComplete(data.complete))
    }
    }

    return (
        <div>
            <p>Task: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Due Date: {task.due_date} days before trip</p>
            <p>Complete: <span onClick={() => handleUpdate(task)}>{complete ? "✅" : "❌"}</span></p>
        </div>
    )
}