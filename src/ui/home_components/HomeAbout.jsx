import AboutUs from "../../assets/images/about-us.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./HomeAbout.css";

const HomeAbout = (props) => {
  return (
    <div className="container about__container">
      <div className="part-2 about_img animate__animated animate__bounceInLeft">
        <img src={AboutUs} alt="Helper Adda" />
      </div>
      <div className="part-1 about__content animate__animated  animate__bounceInRight">
        <small></small>
        <span>About our Company</span>
        <h1>{props.name},</h1>
        <h2>Making people’s daily life easy and convenient</h2>
        <p>
          Manufacturing of designing, innovating and installing various parking
          systems and solutions.
          <strong className="primary-title"> {props.name}</strong> is one of the
          leading manufacturers of car parking systems worldwide.
        </p>        
      </div>
    </div>
  );
};

export default HomeAbout;
