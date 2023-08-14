import React, { StrictMode } from "react";

// =======components ========
import HomeAbout from "../../ui/home_components/HomeAbout";
import WhyChooseUs from "../../ui/home_components/WhyChooseUs";

const About = () => {
  return (
    <StrictMode>
      <HomeAbout name="Tar Parking" />
      <WhyChooseUs name="Tar Parking"/>
    </StrictMode>
  );
};

export default About;
