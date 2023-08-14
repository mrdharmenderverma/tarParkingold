import React, { StrictMode } from 'react';
// =======components ========
import HomeHero from "../../ui/home_components/HomeHero";
import HomeAbout from "../../ui/home_components/HomeAbout";
import WhyChooseUs from "../../ui/home_components/WhyChooseUs";
import NewsRoom from "../../ui/home_components/NewsRoom";
import OurProducts from '../../ui/home_components/OurProducts';

const Home = () => {
  return (
    <StrictMode>
      <HomeHero name="Presented by Shail International Group" />
      <HomeAbout name="Tar Parking" />
      <OurProducts/>
      <WhyChooseUs name="Tar Parking"/>
      <NewsRoom/>
    </StrictMode>
  )
}
export default Home;
