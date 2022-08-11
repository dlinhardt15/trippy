import {NavLink} from "react-router-dom";
import '../css/NavBar.css';

export default function NavBar ({setUser}) {
    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    setUser(null);
                }
            });
      }
    
    return (
        <div id="nav-bar">
            <NavLink to="/welcome">
                <span>
                    Home
                </span>
            </NavLink>
            <NavLink to="/trips">
                <span>
                    Trips
                </span>
            </NavLink>
            <NavLink onClick={handleLogoutClick} to="/login">
                <span>
                    Logout
                </span>
            </NavLink>
        </div>

    )
}