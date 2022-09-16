import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

const Ade = () => {
  return (
    <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('images/1.jpg')", height: "100%" }}
        >
      <div 
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "1000px",
          alignContent: "center"
        }}
          >
      </div>
      <MDBContainer>
        <h1>Web en desarrollo</h1>
        <p>En el concepto de realidad en el manejo de información espacial se parte del principio que todo hecho, elemento, suceso cosa que existe, se ha dado sobre la superficie de la tierra en un momento histórico de su existencia y éste es susceptible a ser incluido en un mapa. Por otro lado se sabe que la información es la base para la toma de decisiones a todo nivel desde los entes gubernamentales, planificadores, instituciones, la empresa privada hasta cualquier persona decide sus acciones sobre la base de información confiable y veraz. Pero también es conocido que existen situaciones que la mera información tabulada o en base de datos no es suficiente para poder leer y entender hechos o situaciones que se dan dentro de un contexto espacial. La distribución espacial de la información sobre un territorio cobra vida y muestra hechos que a simple vista y análisis de los datos tabulares no son visibles. Esto muestra que la mera información tabular es incompleta o insuficiente para poder tomar decisiones objetivas y acertadas. Los Sistemas de Información Geográfica son herramientas que permiten organizar y disponer información espacial en repositorios de bases de datos espaciales, los cuales pueden ser vistos, consultados y desplegados en mapas digitales fácilmente usados desde cualquier interfaz diseñado para tal propósito o con herramientas especializadas para ello. La Información espacial y las herramientas de análisis y manejo relacional espacial son la base para la toma de decisiones más acertadas.</p>
        <h2>Objetivo</h2>
        <p>Generar información espacial de datos geográficos especializados, disponerlos y administrarlos para servirlos a los investigadores o tomadores de decisión a todo nivel desde lo global, continental, país, región o local, apoyando la gestión para un desarrollo sustentable, buen manejo de los recursos, prevención y mitigación del riesgo y mejoramiento de las condiciones de vida de la comunidad.</p>
        <h2>PROYECTOS E INTERESES DE INVESTIGACIÓN</h2>
        <ul>
            <li>Construcción de bases de datos ambientales a nivel regional</li>
            <li>Geoportal Ambiental para Colombia</li>
            <li>Geoportal Ambiental para el Valle del Cauca</li>
            <li>Prototipo de sistema de monitoreo ambiental integrando estaciones automáticas ambientales y Geoinformación para consulta en línea en tiempo real</li>
            <li>Construcción de bases de datos espaciales relacionadas con la infraestructura y desarrollo regional en el Valle del Cauca</li>
            <li>Base de Datos espacial del Campus Universitario Meléndez de la Universidad del Valle</li>
            <li>Base de datos para el inventario arbóreo de Palma Africana en algunas haciendas del país.</li>
            <li>Base de datos para el manejo del distrito de riego la Camba, Valle del Cauca</li>
            <li>Base de datos espacial para la prospección hidroenergética de las cuencas del departamento de Cundinamarca, Colombia</li>
        </ul>
      </MDBContainer>
    </div>
  )
}

export default Ade