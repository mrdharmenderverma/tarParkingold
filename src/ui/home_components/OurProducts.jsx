import "./OurProducts.css";
import CallImg from "../../assets/icons/services-icons/call-img.png";
import RatingImg from "../../assets/icons/services-icons/rating_img.png";
import ProductImg from "../../assets/images/our_product-01.png";
// import { IoMdArrowDropdown } from "react-icons/io";
const OurProducts = () => {
  return (
    <div className="container ourProduct__Container">
      <div className="tab__section">
        <h2 className="text-center">Tar Parking Products</h2>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
        <button type="submit" className="btn_product">
          <p>Tower Car Parking System</p>
        </button>
      </div>
      <div className="image_section">
        <div className="product__img">
          <img src={ProductImg} alt="" />
        </div>
        <div className="product_content">
          <h2>Grand Parking System</h2>
          <p>
            Manufacturing of designing, innovating and installing various
            parking systems.
          </p>
          <button type="button" className="btn-primary">Read More</button>          
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
