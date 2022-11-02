import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Cart() {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <div></div>
    </>
  );
}
