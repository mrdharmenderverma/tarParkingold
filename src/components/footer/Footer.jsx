import { Link } from 'react-router-dom'
import Logo_white from "../../assets/images/footer-logo.svg"
import Playstore from "../../assets/images/footer-playstore.png"
import Appstore from "../../assets/images/footer-appstore.png"
import Instagram from "../../assets/icons/instagram.svg"
import Youtube from "../../assets/icons/youtube.svg"
import Twitter from "../../assets/icons/twitter.svg"
import Facebook from "../../assets/icons/facebook.svg"
import Linkedin from "../../assets/icons/linkedin.svg"
import Location from "../../assets/icons/location.svg"
import Call from "../../assets/icons/call.svg"
import Emailicon from "../../assets/icons/email.svg"
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className='logo footer-logo'>
            <img src={Logo_white} alt="Footer Logo" />
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500
          </p>
          <div className="download__store">
            {/* <Link to="https://play.google.com/store" className='logo'>
              <img src={Playstore} alt="Playstore Logo" />
            </Link> */}
            {/* <Link to="https://www.apple.com/in/app-store/" className='logo'>
              <img src={Appstore} alt="Appstore Logo" />
            </Link> */}
          </div>
          <div className="footer__social">

            <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><img src={Instagram} alt="Instragram" /></a>
            <a href="https://www.youtube.com" target='_blank' rel="noreferrer"><img src={Youtube} alt="Youtube" /></a>
            <a href="https://www.twitter.com" target='_blank' rel="noreferrer"><img src={Twitter} alt="Twitter" /></a>
            <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><img src={Facebook} alt="Facebook" /></a>
            <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></a>
          </div>
        </article>

        <article>
          <h4 className='imp_heading'>Important Links</h4>
          <Link to="/about" className="imp__links">About US</Link> <br />
          <Link to="/services" className="imp__links">Our Services</Link> <br />
          <Link to="/download" className="imp__links">Download App</Link> <br />
          <Link to="#" className="imp__links">Join us</Link> <br />
          <Link to="/contact" className="imp__links">Contact us</Link>
        </article>

        <article>
          <h4>Contact Us</h4>
          <div className="contact-footer-info">
            <div className="contact-info">
              <img src={Location} alt="call icon" className='contact-icons-add' />              
              <p><strong>Cooperate Office : </strong>827-830, 8th floor, Gaur City centre, Greater Noida West, Uttar Pradesh - 201301</p>
              {/* <p>centre, Greater Noida West, Uttar Pradesh - 201301</p> */}
            </div>
            <div className="contact-info">
              <img src={Location} alt="call icon" className='contact-icons-add' />              
              <p><strong>Factory Address : </strong>Ecotech-12, Greater Noida West, Uttar Pradesh </p>
              {/* <p>centre, Greater Noida West, Uttar Pradesh - 201301</p> */}
            </div>
            <div className="contact-info">
              <img src={Call} alt="call icon" className='contact-icons' />
              <p><strong>Contact Number :</strong>+91 8398021095</p>
            </div>
            <div className="contact-info">
              <img src={Emailicon} alt="call icon" className='contact-icons' />
              <p><strong>Email Address :</strong>  info@tarparking.com</p>
            </div>
          </div>

        </article>
      </div>
      <div className="footer__copyright">
        <p>Copyright © Tar Parking 2023. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer