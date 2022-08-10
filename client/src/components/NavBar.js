import {NavLink} from "react-router-dom";

export default function NavBar ({user, setUser}) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    
    return (
        <div>
            <NavLink to="/welcome">
                Home
            </NavLink>
            <NavLink to="/trips">
                Trips
            </NavLink>
            <NavLink onClick={handleLogoutClick} to="/login">
                Logout
            </NavLink>
        </div>

    )
}