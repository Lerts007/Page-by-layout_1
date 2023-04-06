import React from "react";
import BackgroundBall from "./components/BackgroundBall";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <BackgroundBall />
    </div>
  );
}

export default App;
