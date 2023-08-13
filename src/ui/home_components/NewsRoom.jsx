import "./NewsRoom.css";
import NewsroomImg from "../../assets/images/newroom.png";
// import { IoMdArrowDropdown } from "react-icons/io";
const NewsRoom = () => {
  return (
    <div className="container newsroom__Container">
      <div className="newsroom__inner">
        <h5 className="">Our Newsroom</h5>
        <h2 className="">Tar Parking News Room, Read our most recent </h2>
        <button type="submit" className="btn_newroom">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_newroom">
          <p>Tower Car Parking System</p>
        </button>
      </div>

      <div className="newsroom_image">
        <h2 className="text-center">Tar Parking launch new System</h2>
        <div className="newsroom_content">
          <img src={NewsroomImg} alt="" />
          <p>
            Manufacturing of designing, innovating and installing various parking systems and solutions.  TAR PARKING is one of the leading manufacturers of car parking systems worldwide.
          </p>
        </div>
        <div id="button">
          <button type="button" className="btn-primary">
            Read More
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewsRoom;
