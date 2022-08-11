import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import TripPage from "./TripPage";
import Welcome from "./Welcome";
import NewTripForm from "./NewTripForm";
import '../css/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([])
  const [tasks, setTasks] = useState([])
  

  // log in
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  // get trips
  useEffect(() => {
    fetch("/trips")
    .then(response => response.json())
    .then(data => setTrips(data))
  }, [user])
  // get tasks
  useEffect(() => {
    fetch("/tasks")
    .then(response => response.json())
    .then(data => setTasks(data))
  }, [])
  // delete trip
  function handleDelete(id) {
    console.log("delete")
    fetch(`/trips/${id}`, {
        method: 'DELETE',
      }).then((r) => r.json());
    setTrips(trips.filter((trip) => trip.id !== id));
  }
  // complete task (update)
  

  if (!user) return (
    <main>
      <BrowserRouter>
        <Switch>
        <Route path="/signup">
           <SignUp onLogin={setUser}/>
          </Route>
        <Route path="/">
           <Login onLogin={setUser} />
        </Route>
        </Switch>
      </BrowserRouter>
    </main>)
  
  return (
    <>
      <BrowserRouter>
      <NavBar setUser={setUser} />
        <Switch>
          <Route path="/login">
            <Welcome />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/trips">
            <TripPage handleDelete={handleDelete} trips={trips} user={user} tasks={tasks} setTasks={setTasks}/>
          </Route>
          <Route path="/newtrip">
            <NewTripForm user={user} trips={trips} setTrips={setTrips}/>
          </Route>
        </Switch>
    </BrowserRouter></>
  );
}

export default App;