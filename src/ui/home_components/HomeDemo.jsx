// import CallImg from "../../assets/icons/services-icons/call-img.png";
// import RatingImg from "../../assets/icons/services-icons/rating_img.png"
import { AiOutlineCheckCircle } from "react-icons/ai";

import './HomeDemo.css'

const HomeDemo = () => {
    return (
        <div className="container homedemo__container">
            <div className="part-1">
                <div className="left-heading">
                    <div className="top-heading">
                        <h5><AiOutlineCheckCircle /> Want to join us as services provider ?</h5>
                    </div>
                </div>
                <h2>Let’s Scheduled A Demo!</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .
                </p>
                <div className="demoContact">

                </div>
            </div>
            <div className="part-2 BookDemo-card">

            </div>
        </div>
    )
}

export default HomeDemo