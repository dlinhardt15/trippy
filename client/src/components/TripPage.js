import {NavLink} from "react-router-dom";
import TripCard from "./TripCard";

export default function TripPage ({trips, user, tasks, setTasks, handleDelete}) {
    // console.log(trips[0].id)
    return (
        <div>
            <div className="trips-container">
                {trips.map(trip => {
                    return (<div>
                        <TripCard 
                        key={trip.id} 
                        trip={trip} 
                        user={user} 
                        tasks={tasks} 
                        setTasks={setTasks}
                        handleDelete={handleDelete}
                        />
                    </div>)
                })}
            </div>
            <NavLink to="/newtrip">
                Create a new trip!
            </NavLink>
        </div>
    )
   
}