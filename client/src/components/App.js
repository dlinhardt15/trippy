import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import TripPage from "./TripPage";

function App() {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/trips")
  })

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
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/welcome">
            <TripPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter></>
  );
}

export default App;