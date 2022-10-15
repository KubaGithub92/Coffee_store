import React from 'react';
import Footer from '../components/Footer/Footer';
import '../styles/Home.scss'

function Home() {
  return (
    <>
      <section className='home'>
        <h1 className="home__heading home__heading_1">Generic Hipster Coffee</h1>
        <h2 className="home__heading home__heading_2">Specialty coffee, fresh food & local community.</h2>
        <img
          src={require('../img/counter.jpg')}
          alt="Interior of a coffee store"
          className="home__image"
      />

      <div className="home__contact">
        <div className="contact__item">
          <h3 className="heading__contact">Opening hours</h3>
          <div className="contact__text contact__text_padding-bottom">
            sunday to thursday: 8 am to 11 pm
          </div>
          <div className="contact__text">friday to saturday: 8 am to 1 am</div>
        </div>
        <div className="contact__item">
          <h3 className="heading__contact">Book a table</h3>
          <div>Call +1 415-321-4567</div>
        </div>
        <div className="contact__item">
          <h3 className="heading__contact">Address</h3>
          <div className="contact__text contact__text_padding-bottom">
            321 Ivy St.
          </div>
          <div className="contact__text">San Francisco, CA 94102</div>
        </div>
      </div>

      <iframe
      title='iframe'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5476330023657!2d-122.42566538556419!3d37.77720391979442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580989a43e76d%3A0x45f1b189ee3b07b3!2s321%20Ivy%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20Spojen%C3%A9%20st%C3%A1ty%20americk%C3%A9!5e0!3m2!1scs!2scz!4v1663325349302!5m2!1scs!2scz"
        width="600"
        height="450"
        className="home__map"
        // style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
        
      </section>
      
      <Footer/>
    </>
  );
}

export default Home;