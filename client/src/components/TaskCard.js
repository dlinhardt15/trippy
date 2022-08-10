import {useState} from "react";

export default function TaskCard ({task}) {
    const [complete, setComplete] = useState(false)

    function handleComplete (e) {
        console.log(e)
        setComplete(complete ? false : true)
    }
    
    return (
        <div key={task.id}>
            <p>Task: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Due Date: {task.due_date} days before trip</p>
            <p>Complete: <span onClick={handleComplete}>{complete ? "✅" : "❌"}</span></p>
        </div>
    )
}