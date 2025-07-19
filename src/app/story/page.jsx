import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function story() {
  return (
    <div>
      <Header />
      <div className="flex justify-center h-screen items-center">
        <p> Our story</p>
      </div>
      <Footer />
    </div>
  );
}

export default story;
