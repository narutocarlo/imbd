
import facbook from "../../images/logo/facebook.png"
import instagram from "../../images/logo/instagram.png"
import youtube from "../../images/logo/youtube.png"
 const Footer = () => {
    return (
        <div className="  text-center bg-dark  ">
            <div className="card-header d-flex justify-content-evenly  ">
                <img src={facbook} alt="error" className=" logo " />
                <img src={instagram} className=" logo "/>
                <img src={youtube} className=" logo "/>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}
export default Footer