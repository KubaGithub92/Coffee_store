import React from 'react';
import Footer from '../components/Footer/Footer'
import "../styles/Story.scss"
import Form from '../components/Form/Form';

function Story() {
  return (

        <>
          <section className='story'>
            <div className='story__wrapper'>
              <div className='story__content'>
                  <h2 className='story__content-heading'>Our Story</h2>
                  <p className='story__content-text'>GHC started as a project of two friends and passionate baristas, John & Don in 2010. 
                     Believing as much in the hand of an educated barista as in the innovative equipment of the our ever-growing industry, GHC offers a full spectrum of brewing opportunities - from pour overs to syphon pots to finely executed espresso beverages. Each cup of coffee is made with love, precision and care.</p>
              </div>
      
              <div className='story__images'>
                <div className='story__image-wrapper'><img src={require("../img/coffee-cups.jpg")} alt="3 cups of coffee" /></div>
                <div className='story__image-wrapper'><img src={require("../img/coffee-bag.jpg")} alt="bag full of coffee seeds" /></div>
                <div className='story__image-wrapper'><img src={require("../img/coffee-seeds.jpg")} alt="coffee seeds" /></div>
                <div className='story__image-wrapper'><img src={require("../img/pouring-coffee.jpg")} alt="pouring coffee" /></div>
              </div>
            </div>
    
          <Form/>
    
          </section>
          <Footer/>
        </>
  );
}

export default Story;