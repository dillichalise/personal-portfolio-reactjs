import React from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import IntroPage from "./intro";
import AboutComponent from "./about";
import ExperienceComponent from "./experience";
import EducationComponent from "./education";

const App = () => {
  return (
    <div>
      <Header />
      <IntroPage />
      <AboutComponent />
      <ExperienceComponent />
      <EducationComponent />
      <Footer />
    </div>
  );
};

export default App;
