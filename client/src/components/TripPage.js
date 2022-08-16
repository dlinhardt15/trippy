import {NavLink} from "react-router-dom";
import TripCard from "./TripCard";
import '../css/TripPage.css';

export default function TripPage ({trips, user, handleDelete}) {
    return (
        <div>
            <div className="trips-container">
                {trips.map(trip => {
                    return (<div id="trip-card">
                        <TripCard 
                        key={trip.id} 
                        trip={trip} 
                        user={user} 
                        handleDelete={handleDelete}
                        />
                    </div>)
                })}
            </div>
            <NavLink to="/newtrip" className="get-trip-form">
                Caught the travel bug?<br></br>
                Create a New Trip!
            </NavLink>
        </div>
    )
   
}