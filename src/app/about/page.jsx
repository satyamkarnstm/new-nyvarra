import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function aboutUs() {
  return (
    <div>
      <Header />
      <div className="flex justify-center h-screen items-center">
        <p> About Us</p>
      </div>
      <Footer />
    </div>
  );
}

export default aboutUs;
