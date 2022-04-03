import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import StarfieldAnimation from "react-starfield-animation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

export default class App extends Component {
  componentDidMount() {
    //An array of assets
    let scripts = [
      {
        src: "assets/js/scrollreveal.min.js",
      },
      { src: "assets/js/swiper-bundle.min.js" },
      { src: "assets/js/mixitup.min.js" },
      { src: "assets/js/main.js" },
    ];
    //Append the script element on each iteration
    scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <StarfieldAnimation
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
