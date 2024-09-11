import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
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

export default App;
