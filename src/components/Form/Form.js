import React from 'react'
import './Form.scss'

export default function Form() {
  return (
   <div className='form__wrapper'>
   <h2 className="form__heading">Contact us</h2>
   <form  className='form' action="save.php" method='post'>
      <div className='form__inputs'>
        <div className='form__inputs-item'>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name='first-name' id='first-name' required/>
        </div>
        <div className='form__inputs-item'>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name='last-name' id='last-name' required/>
        </div>
        <div className='form__inputs-item'>
          <label htmlFor="phone-num">Phone Number</label>
          <input type="tel" name='phone-num' id='phone-num' required/>
        </div>
        <div className='form__inputs-item'>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' required/>
        </div>
      </div>

      <div className='form__message'>
        <label className="form__message-label" htmlFor="message">Your message</label>
        <textarea className='form__message-textarea' name="message" id="message" cols="30" rows="10"></textarea>
      </div>

      <button className='form__button' type='submit'>Send message</button>
   </form>
   </div>
  )
}
