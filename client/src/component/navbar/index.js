import SignUpLogin from "../signUplogin"
import {useState} from "react"
const Navbar = (props) => {
    
    

    return (
        <nav className="navbar navShadow  mb-2 navbar-expand-lg mb-1 navbar-dark bg-dark  position-fixed  w-100  ">
            <div className="container-fluid  ">
                <a className="navbar-brand text-warning "  href="#">IMBD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Edit profile</a></li>
                        <li><a className="dropdown-item" href="#">Wish List</a></li>
                        {/* <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                    </li>
                        <li className="nav-item">
                            {
                                props.isLoggedIn ? 
                                    <a className="nav-link active" aria-current="page" href="/signUpLogin">Login</a>
                                    :

                                    <a className="nav-link active" aria-current="page" href="/signUpLogin">LogOut</a>
                                    
                            }
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>        
        
    )
}
export default Navbar