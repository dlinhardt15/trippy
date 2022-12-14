import {useState} from "react";
import '../css/NewTripForm.css';

export default function NewTripForm ({user, setTrips, trips}) {
    const defaultFormData = {
        user_id: user.id,
        name: "",
        departure_date: "",
        travel_method_id: ""
    }
    
    const [formData, setFormData] = useState(defaultFormData)

    function handleChange (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    function handleSubmit (e) {
        e.preventDefault()

        fetch("/trips", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then(response => response.json())
          .then(data => setTrips([...trips, data]))
        setFormData(defaultFormData)
    }
    
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} id="new-trip-form">
                <label className="new-trip-label">Name: </label>
                <input className="new-trip-input" id="trip-name" name="name" value={formData.name} onChange={handleChange} placeholder="Name Your Trip"></input>
                <label className="new-trip-label">Departure Date: </label>
                <input id="departure-date" name="departure_date" className="new-trip-input" value={formData.departure_date} type="date" onChange={handleChange} placeholder="YYYY/MM/DD"></input>
                <label className="new-trip-label">Method of Transportation: </label>
                <select id="travel-method-option" name="travel_method_id" onChange={handleChange} value={formData.travel_method_id}>
                    <option>Choose One</option>
                    <option value="1">Plane</option>
                    <option value="2">Train</option>
                    <option value="3">Automobile</option>
                </select>
                <button id="bon-voyage">Bon Voyage!</button>
            </form>
        </div>
    )
}