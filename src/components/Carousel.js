import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <div className='container' style={{ backgroundColor: 'white'}}>
        <Slider {...settings}>
          <div className='py-4'>
              <CardItem
                src='images/1.jpg'
                text='Análisis de Datos Esapaciales - "Big GeoData"'
                label='Geomatica'
                path='/ade'
              />
          </div>
          <div className='py-4'>
          <CardItem
              src='images/2.jpg'
              text='Bases de Datos Espacial. SQL - NOSQL '
              label='Geomatica'
              path='/ade'
            />
          </div>
          <div className='py-4'>
          <CardItem
              src='images/4.jpg'
              text='Seguimiento y Monitoreo en Tiempo Real'
              label='Geomatica'
              path='/ade'
            />
          </div>
          <div className='py-4'>
          <CardItem
              src='images/3.jpg'
              text='Interación Directa con el SIG en Tiempo Real'
              label='Geomatica'
              path='/ade'
            />
          </div>
          <div className='py-4'>
          <CardItem
              src='images/39.jpg'
              text='Modelación y Simulación de Datos Espaciales.'
              label='Geomatica'
              path='/ade'
            />
          </div>
          <div className='py-4'>
          <CardItem
              src='images/39.jpg'
              text='Integración de Escenarios y Generación de Pronosticos.'
              label='Geomatica'
              path='/products'
            />
          </div>
          <div className='py-4'>
          <CardItem
              src='images/5.jpg'
              text='Manejo de información Multiespectrar. (UAV)'
              label='Geomatica'
              path='/sign-up'
            />
          </div>
        </Slider>
      </div>
  )
}

export default Carousel