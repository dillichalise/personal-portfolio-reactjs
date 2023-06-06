import React from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import IntroPage from "./intro";
import AboutComponent from "./about";

const App = () => {
  return (
    <div>
      <Header />
      <IntroPage />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default App;
