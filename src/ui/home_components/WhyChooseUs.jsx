import service_img from "../../assets/images/services-img.png";
import ViewMoreIcon from "../../assets/icons/view-arrow.svg";
import ChooseImg from "../../assets/images/choose-img.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./WhyChooseUs.css";

const WhyChooseUs = (props) => {
  return (
    <div className="container services__container">
      <div className="center-heading">
        <h5 className="top-heading">WHY CHOOSE US</h5>
        <h1 className="center_heading">
          <strong className="primary-heading">{props.name}</strong> is one of
          the best company providing multiple car parking systems
        </h1>
      </div>
      <div className="services__wrap">
        <div className="service__img animate__animated animate__bounceInLeft">
          <img src={service_img} alt="Services" />
        </div>
        <div className="part-1 about__content animate__animated  animate__bounceInRight">
          <h2>Making people’s daily life easy and convenient</h2>
          <p>
            Manufacturing of designing, innovating and installing various
            parking systems and solutions.
            <strong className="primary-title"> {props.name}</strong> is one of
            the leading manufacturers of car parking systems worldwide.
          </p>
          <div className="about_inner">
            <div className="inner-1">
              <img src={ChooseImg} alt="" />
            </div>
            <div className="inner-2">
              <li>
                <AiOutlineCheckCircle color="#32c6f4" /> Easy & Emergency
                Solutions Anytime
              </li>
              <li>
                <AiOutlineCheckCircle color="#32c6f4" /> Getting Services at
                Affordable price
              </li>
              <li>
                <AiOutlineCheckCircle color="#32c6f4" /> More Reliable &
                Experienced Teams
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
