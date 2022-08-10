import {NavLink} from "react-router-dom";
import TripCard from "./TripCard";

export default function TripPage ({trips}) {
    // console.log(trips[0].id)
    return (
        <div>
            <NavLink to="/newtrip">
                Create a new trip!
            </NavLink>
            <div className="trips-container">
                {trips.map(trip => {
                    return (<div><TripCard key={trip.id} trip={trip}/></div>)
                })}
            </div>
        </div>
    )
   
}