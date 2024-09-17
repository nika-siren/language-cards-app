import React from "react";
import "/src/pages/MainPage/MainPage";
import Header from "/src/components/header/Header";
import Footer from "/src/components/footer/Footer";

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
