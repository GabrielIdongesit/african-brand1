import React from "react";
import Category from "./components/Category";
import Clothes from "./components/Clothes";
import Footer from "./components/Footer";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Clothes />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
