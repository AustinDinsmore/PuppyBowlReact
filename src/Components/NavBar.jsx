import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
            <h1>Puppy Bowl</h1>
            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/puppies">Puppies</NavLink>
                
            </nav>
        </div>
    )
}