import React from "react";
import Footer from "../components/Footer/Footer";
import "../styles/Coffee.scss";
import CoffeCard from "../components/CoffeCard/CoffeCard";

function Coffee() {
  return (
    <>
      <section className="coffee">
        <h2 className="coffee__heading">Coffee</h2>
        <p className="coffee__text">
          We work with specialty coffee from current crops which is carefully
          roasted. Our coffee is fruity, juicy and never boring. We bring you
          the best from leading european specialty roasteries, currently mostly
          from{" "}
          <a href="#" target="_blank">
            Square Mile Coffee Roasters
          </a>
          , a multi award winning coffee roasting company based in East London.
        </p>
        <span className="coffee__offer">
          You can currently buy these beans in 350g bags
        </span>

        <div className="coffee__items">
          <CoffeCard
            title="Quejina (Guatemala)"
            img="quejina"
            taste="redcurrant/honeysuckle/juicy"
            text="Fruity redcurrant and sweet honeysuckle flavours. An incredibly
              juicy coffee which we struggled to decide on the right berry
              descriptor, but raspberry, blackberry and blueberry were also in
              the running!"
          />
          <CoffeCard
            title="Mormora (Ethiopia)"
            img="mormora"
            taste="blackberry/orange/silky"
            text="Fruity, sweet notes of dried mango, strawberry and passionfruit
              sit alongside a delicious creamy mouthfeel making this a tasty
              summer Ethiopian, hot or cold."
          />
          <CoffeCard
            title="Kamwangi (Kenya)"
            img="kamwangi"
            taste="blackberry/orange/silky"
            text="This is one fruit filled espresso! From citrus fruits, such as
              orange, grapefruit and clementine, to berries of the black, blue
              and red variety, this is fruit turned up to 11, all wrapped up in
              a silky smooth body."
          />
          <CoffeCard
            title="Decaf Espresso (El Salvador)"
            img="decaf-espresso"
            taste="caramel/apple/cinnamon"
            text="This is a single origin espresso from San Carlos in El Salvador,
              think sweet caramel and apple notes alongside sprinklings of
              cinnamon in the finish."
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Coffee;
