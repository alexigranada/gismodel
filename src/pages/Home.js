import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { MDBContainer, } from "mdb-react-ui-kit";
import CardHome from '../components/CardHome';
import Cards from '../components/Cards';
import CardHomeServicios from '../components/CardHomeServicios';
import ModalPunto from '../components/ModalPunto';
import Carousel from '../components/Carousel';
import CardProfile from '../components/CardProfile';
import Portfolio from '../components/Portfolio';
import Particulas from '../components/Particulas';

const Home = () => {
  return (
          <>
          <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src="/images/space.mp4" type ='video/mp4' />
            </video>
            <div className='content'>
                <div className='content-text'>
                  <h1>GISMODEL</h1>
                  <h2>Grupo de Investigación en Simulación y <br/> Modelación Dinámica Espacial</h2>
                    <h3> 
                      <span style={{ color: 'cyan', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                          words={[' Bases de Datos Espacial', ' Análisis Espacial', ' Seguimiento y monitoreo en tiempo real', ' Interación directa con el SIG en tiempo real', ' Modelación Espacial', ' Manejo de información multiespectral']}
                          loop
                          cursor
                          cursorStyle='|'
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />
                      </span>
                    </h3>
                </div>
            </div>
          </div>
          <CardHome></CardHome>
          <Portfolio></Portfolio>
          <Cards></Cards>
          <CardHomeServicios></CardHomeServicios>
          </>
         )
}

export default Home