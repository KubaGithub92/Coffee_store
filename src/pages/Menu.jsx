import React from 'react';
import Footer from '../components/Footer/Footer'
import '../styles/Menu.scss';

function Menu() {
  return (
    <>
      <section class="menu">
      <div class="column">
        <div class="menu__container-big">
          <div class="menu__container-small">
            <h3>ESPRESSO COFFEE</h3>
            <div><span>Espresso</span> <span>3.8</span></div>
            <div><span>Double espresso</span> <span>4.9</span></div>
            <div><span>Americano</span> <span>5</span></div>
            <div><span>Espresso machiato</span> <span>4.3</span></div>
            <div><span>Cappuccino</span> <span>5.2</span></div>
            <div><span>Flat White</span> <span>5.9</span></div>
            <div><span>Latte</span> <span>5.9</span></div>
            <div><span>Extra shot</span> <span> 1.1</span></div>
          </div>

          <div class="menu__container-small">
            <h3>FILTER COFFEE</h3>
            <div><span>House Drip Coffee</span> <span>4.5</span></div>
            <div><span>Aeropress</span> <span>5.5</span></div>
            <div><span>V60</span> <span>6.5</span></div>
            <div><span>Kalita</span> <span>12</span></div>
          </div>
          <div class="menu__container-small">
            <h3>COFFEE SPECIALITES</h3>
            <div><span>Cascara</span> <span>4.9</span></div>
            <div><span>Irish coffee</span> <span>10.9</span></div>
          </div>
        </div>

        <div class="menu__container-big">
          <div class="menu__container-small">
            <h3>ICED</h3>
            <div><span>Iced Latte</span> <span>6.9</span></div>
            <div><span>Espresso on the rock</span> <span>4.9</span></div>
            <div><span>Iced Cascara</span> <span>5.5</span></div>
            <div><span>Affogato</span> <span>6.5</span></div>
            <div><span>Iced Flat white</span> <span>12</span></div>
            <div><span>Iced Filter</span> <span>5.5</span></div>
            <div><span>Iced tea</span> <span>6.5</span></div>
            <div><span>Iced chocolate</span> <span>12</span></div>
          </div>

          <div class="menu__container-small">
            <h3>HOT</h3>
            <div><span>Tea</span> <span>6.3</span></div>
            <div><span>Ginger tea</span> <span>4.2</span></div>
            <div><span>Hot chocolate</span> <span>9.5</span></div>
          </div>
        </div>

        <div class="menu__container-big">
          <div class="menu__container-small">
            <h3>SOMETHING TO EAT</h3>
            <div><span>Soup of the day</span> <span>3.5</span></div>
            <div>
              <span>Chipotle Citrus Chicken Sandwich</span> <span>5.3</span>
            </div>
            <div><span>Avocado Toast</span> <span>6.5</span></div>
            <div><span>Super BLT Sandwich</span> <span>11</span></div>
          </div>

          <div class="menu__container-small">
            <h3>SWEETS</h3>
            <div><span>Homemade cakes of the day</span> <span>3.8</span></div>
            <div><span>Key Lime and Coconut</span> <span>4.5</span></div>
            <div><span>Icecream</span> <span>3.9</span></div>
            <div><span>Tiramisu</span> <span>5.1</span></div>
          </div>
        </div>
      </div>
      <div class="column">
        <h2>NON-ALCOHOLIC BEVERAGES</h2>
        <div class="menu__container-big">
          <div class="menu__container-small">
            <h3>LEMONADES</h3>
            <div><span>Fresh Squeezed Lemonade</span> <span>5.4</span></div>
            <div><span>Ginger Lemonade</span> <span>4.5</span></div>
            <div><span>Cascara Fizz Original</span> <span>3.5</span></div>
            <div><span>Club-mate Cola</span> <span>6.5</span></div>
            <div><span>Tonic Thomas Henry</span> <span>12</span></div>
          </div>

          <div class="menu__container-small">
            <h3>WATER</h3>
            <div><span>Sparkling</span> <span>8.2</span></div>
            <div><span>Still</span> <span>4.4</span></div>
          </div>
        </div>

        <h2>ALCOHOLIC BEVERAGES</h2>
        <div class="menu__container-big">
          <div class="menu__container-small">
            <h3>BEER</h3>
            <div><span>Small breweries on tap</span> <span>4.5</span></div>
            <div><span>Birell (bottled)</span> <span>5.3</span></div>
            <div><span>Cider Magnetic Apple</span> <span>6.2</span></div>
          </div>

          <div class="menu__container-small">
            <h3>WHITE WINE</h3>
            <div>
              <span>Chardonnay Les Vignes de L'Arque,France</span>
              <span>7.8</span>
            </div>
            <div>
              <span>Sauvignon Blanc, Château Le Sartre Blanc 2011</span>
              <span>7.7</span>
            </div>
          </div>
          <div class="menu__container-small">
            <h3>RED WINE</h3>
            <div>
              <span>Cuvée Côtes du Rhône Vigneros de Caracterem</span>
              <span>7.2</span>
            </div>
            <div>
              <span>Cabernet Sauvignon, Château Tour du Roch-Milon 2011</span>
              <span>7.2</span>
            </div>
          </div>
          <div class="menu__container-small">
            <h3>COCKTAILS</h3>
            <div><span>Gin Tonic</span> <span>6.5</span></div>
            <div><span>Cuba Libre</span> <span>5.4</span></div>
            <div><span>Mojito</span> <span>4.3</span></div>
          </div>
          <div class="menu__container-small">
            <h3>SPIRITS</h3>
            <div><span>Metaxa 12*</span> <span>4.5</span></div>
            <div><span>Tullamore Dew</span> <span>5.4</span></div>
            <div><span>Jameson Whiskey</span> <span>3.8</span></div>
            <div><span>Bombay, Añejo Suave</span> <span>4.9</span></div>
            <div><span>Ron Cubay, Añejo Suave</span> <span>4.8</span></div>
            <div>
              <span>Tequila, El Jimador, Reposado</span> <span>4.7</span>
            </div>
            <div><span>Vodka Finlandia</span> <span>5.5</span></div>
            <div><span>Bailey's</span> <span>6.5</span></div>
            <div><span>Jagermeister</span> <span>4.9</span></div>
            <div><span>Graham's Tawny Porto</span> <span>4.8</span></div>
          </div>
        </div>
      </div>
      <img
        class="menu__img"
        src={require("../img/espresso-machine-detail.jpg")}
        alt="coffee"
      />
    </section>
      <Footer/>
    </>
  );
}

export default Menu;