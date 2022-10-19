import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

export default function Form() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(value);
    // console.log(inputs.firstName);
    // console.log(firstName, lastName, phoneNum, email);
  };
  // console.log(firstName, lastName, phoneNum, email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const url =
      "http://www.cbp-exercises.test/home_exercise/coffee_store/src/Form-data/save.php";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(inputs),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const myUsableResponse = await response.json();
    // console.log(myUsableResponse);
    // navigate("/");
  };

  return (
    <div className="form__wrapper">
      <h2 className="form__heading">Contact us</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__inputs">
          <div className="form__inputs-item">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="firstName"
              id="first-name"
              onChange={handleChange}
              value={inputs.firstName}
              required
            />
          </div>
          <div className="form__inputs-item">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              onChange={handleChange}
              value={inputs.lastName}
              required
            />
          </div>
          <div className="form__inputs-item">
            <label htmlFor="phone-num">Phone Number</label>
            <input
              type="tel"
              name="phoneNum"
              id="phone-num"
              onChange={handleChange}
              value={inputs.phoneNumber}
              required
            />
          </div>
          <div className="form__inputs-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={inputs.email}
              required
            />
          </div>
        </div>

        <div className="form__message">
          <label className="form__message-label" htmlFor="message">
            Your message
          </label>
          <textarea
            className="form__message-textarea"
            onChange={handleChange}
            value={inputs.message}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="form__button" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
