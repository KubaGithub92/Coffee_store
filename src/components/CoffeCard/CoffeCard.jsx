import React from "react";
import { useState, useContext } from "react";
import CartContext from "../../CartContext";

export default function CoffeCard(props) {
  const { cart, setCart } = useContext(CartContext);
  const [coffeeArticle, setCoffeeArticle] = useState({
    title: props.title,
    img: props.img,
    taste: props.taste,
    text: props.text,
  });

  // console.log(coffeeArticle);

  const addToCart = () => {
    setCart([...cart, coffeeArticle]);
  };

  return (
    <>
      <div className="coffee__item">
        <div className="item__heading">{props.title}</div>
        <img
          src={require(`../../img/smcr-${props.img}.jpg`)}
          alt="Coffee package"
        />
        <div className="item__bottom">
          <div className="item__taste">{props.taste}</div>
          <p className="item__text">{props.text}</p>
          <button onClick={addToCart}>Buy</button>
        </div>
      </div>
    </>
  );
}
