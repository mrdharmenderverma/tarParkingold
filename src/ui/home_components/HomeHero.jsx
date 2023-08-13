import { Link } from "react-router-dom";
import {DownloadLinks} from "../../data"
import HeroImg from "../../assets/images/hero-img.png";
import './HomeHero.css'

const HomeHero = (props) => {
  return (
    <div className="container hero__container">
      <div className="part-1  animate__animated animate__bounceInLeft">
        <small></small>
        <span>{props.name}</span>
        <h1>Tar Parking,</h1>
        <h2>Park with Ease, Leave with Peace with Us</h2>
        <p>
        Manufactures the most advanced mechanical car parking system which can expand the parking capacity up to multiple times more on the most tight and limited space in most areas of urban India.
        </p>
        <div className="download__store">
          <button type="button" className="btn-primary">Book Demo NOw</button>
          <button type="button" className="btn-secondary">Explore Products</button>
          
        </div>
      </div>
      <div className="part-2 animate__animated  animate__zoomInRight">
        <img src={HeroImg} alt="Helper Adda" />
      </div>
    </div>
  )
}
export default HomeHero