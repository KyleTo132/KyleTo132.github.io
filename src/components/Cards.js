import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Gaming gear!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Explore the fantastic keyboard world'
              label='Keyboards'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through various model of pro mouse '
              label='Mouses'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the epic sea of epic screen'
              label='Screens'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience comfort in every position and situation'
              label='Chairs'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through our best gaming gear and register to get every discount nearby'
              label='Register'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;