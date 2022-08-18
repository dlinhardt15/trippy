import '../css/TaskCard.css';

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
        <div id="task">
            <p id="task-name"><strong>Task:</strong> {task.name}</p>
            <p id="task-description"><strong>Description:</strong> {task.description}</p>
            <p id="task-due-date"><strong>Due Date:</strong> {task.due_date} days before trip</p>
            <p><strong>Complete:</strong> <span id="task-button" onClick={() => handleUpdate(task)}>{task.complete ? "✅" : "❌"}</span></p>
        </div>
    )
}