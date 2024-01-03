import React from "react";
import { Helmet } from "react-helmet";

import { About, Footer, Header, Skills, Testimonial, Work, Features } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import 'react-tooltip/dist/react-tooltip.css';

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>APPvalanche</title>
        <link rel="canonical" href="https://appvalanche.com/" />
        <meta name="APPvalanche" content="Portfolio" />
      </Helmet>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
