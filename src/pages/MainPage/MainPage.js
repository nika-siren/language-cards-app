import React from "react";
import "../../pages/MainPage/MainPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function MainPage() {
  return (
    <div className="MainPage">
      <React.StrictMode>
        <Header />
        <h3>choose language</h3>
        <div className="Languages">
          <button>Spanish</button>
          <button>Spanish</button>
          <button>Spanish</button>
          <button>Spanish</button>
        </div>
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default MainPage;
