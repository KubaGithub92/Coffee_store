import React from 'react';
import Footer from '../components/Footer/Footer';
import '../styles/Coffee.scss'

function Coffee() {
  return (
    <>
      <section class="coffee">
      <h2 class="coffee__heading">Coffee</h2>
      <p class="coffee__text">
        We work with specialty coffee from current crops which is carefully
        roasted. Our coffee is fruity, juicy and never boring. We bring you the
        best from leading european specialty roasteries, currently mostly from <a href="#" target="_blank">Square Mile Coffee Roasters</a>
        , a multi
        award winning coffee roasting company based in East London.
      </p>
      <span class="coffee__offer"
        >You can currently buy these beans in 350g bags</span
      >

      <div class="coffee__items">
        <div class="coffee__item">
          <div class="item__heading">Quejina (Guatemala)</div>
          <img src={require("../img/smcr-quejina.jpg")} alt="Coffee package" />
          <div class="item__bottom">
            <div class="item__taste">redcurrant/honeysuckle/juicy</div>
            <p class="item__text">
              Fruity redcurrant and sweet honeysuckle flavours. An incredibly
              juicy coffee which we struggled to decide on the right berry
              descriptor, but raspberry, blackberry and blueberry were also in
              the running!
            </p>
          </div>
        </div>

        <div class="coffee__item">
          <div class="item__heading">Mormora (Ethiopia)</div>
          <img src={require("../img/smcr-mormora.jpg")} alt="Coffee package" />
          <div class="item__bottom">
            <div class="item__taste">blackberry/orange/silky</div>
            <p class="item__text">
              Fruity, sweet notes of dried mango, strawberry and passionfruit
              sit alongside a delicious creamy mouthfeel making this a tasty
              summer Ethiopian, hot or cold.
            </p>
          </div>
        </div>

        <div class="coffee__item">
          <div class="item__heading">Kamwangi (Kenya)</div>
          <img src={require("../img/smcr-kamwangi.jpg")} alt="Coffee package" />
          <div class="item__bottom">
            <div class="item__taste">blackberry/orange/silky</div>
            <p class="item__text">
              This is one fruit filled espresso! From citrus fruits, such as
              orange, grapefruit and clementine, to berries of the black, blue
              and red variety, this is fruit turned up to 11, all wrapped up in
              a silky smooth body.
            </p>
          </div>
        </div>

        <div class="coffee__item">
          <div class="item__heading">Decaf Espresso (El Salvador)</div>
          <img src={require("../img/smcr-decaf-espresso.jpg")} alt="Coffee package" />
          <div class="item__bottom">
            <div class="item__taste">caramel/apple/cinnamon</div>
            <p class="item__text">
              This is a single origin espresso from San Carlos in El Salvador,
              think sweet caramel and apple notes alongside sprinklings of
              cinnamon in the finish.
            </p>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </>
  );
}

export default Coffee;