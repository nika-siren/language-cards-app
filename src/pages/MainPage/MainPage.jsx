import React from "react";
import "../../Pages/MainPage/MainPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <h3>choose language</h3>
      <div className="languages">
        <button>Spanish</button>
        <button>Spanish</button>
        <button>Spanish</button>
        <button>Spanish</button>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
