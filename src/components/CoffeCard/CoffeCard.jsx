import React from 'react'

export default function CoffeCard(props) {
  return (
    <>
    <div className="coffee__item">
      <div className="item__heading">{props.title}</div>
      <img src={require(`../../img/smcr-${props.img}.jpg`)} alt="Coffee package" />
      <div className="item__bottom">
        <div className="item__taste">{props.taste}</div>
        <p className="item__text">
          {props.text}
        </p>
      </div>
    </div>
    </>
  )
}
