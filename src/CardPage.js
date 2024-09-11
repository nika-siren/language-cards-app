import Card from "./Card";
import React from "react";
import "./App.css";

function CardPage() {
    return (
      <div className="CardPage">
        <React.StrictMode>
            <Card/>
        </React.StrictMode>
        <div className="Buttons-1">
            <button>don't know yet</button>
            <button>remaining cards</button>
            <button>i know this one!</button>
        </div>
        <div className="Buttons-2">
            <button>retry</button>
            <button>shuffle</button>
            <button>restart</button>
        </div>
      </div>
    );
  }
  
  export default CardPage;