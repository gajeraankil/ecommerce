import React from "react";
import FeatureProduct from "../components/FeatureProduct";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const Home = () => {
  const heroTitle = {
    name: "Amazon Store",
  };
  return (
    <>
      <HeroSection heroTitle={heroTitle} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
