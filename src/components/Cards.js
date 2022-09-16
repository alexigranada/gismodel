import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Carousel from '../components/Carousel';

function Cards() {

  return (
    <div className='cards'>
      <h1 className='text-dark'>Nuestros Servicios</h1>
      <Carousel></Carousel>
    </div>
    
  );
}

export default Cards;