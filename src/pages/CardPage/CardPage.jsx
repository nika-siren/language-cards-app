import Card from "/src/Components/card/card";
import React from "react";
import "../../pages/MainPage/MainPage.css";

function CardPage() {
  return (
    <div className="cardPage">
      <Card />
      <div className="buttons-1">
        <button>don't know yet</button>
        <button>remaining cards</button>
        <button>i know this one!</button>
      </div>
      <div className="buttons-2">
        <button>retry</button>
        <button>shuffle</button>
        <button>restart</button>
      </div>
    </div>
  );
}

export default CardPage;
