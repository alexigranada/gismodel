import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit'
import React from 'react'
import CardPorfolio from './CardPorfolio'
import Particulas from './Particulas'

const Portfolio = () => {
  return (
    <div className='content__porfolio' style={{position: 'relative'}}>
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
      <Particulas>
      </Particulas>
      </div>
      <div className='text-center py-3' ><h1 className='text-center text-light' style={{position: 'absolute'}}>Portfolio en construcción</h1></div>
      <div>
        <div className='container '>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol>
              <CardPorfolio
              img='images/sigla.png'
              title='SIGLA'
              description='Sistema de Regulación de Lamina de agua en arroz inundado'/>
            </MDBCol>
            <MDBCol>
              <CardPorfolio
              img='images/uvmanos.png'
              title='UVMANOS'
              description='Geoportal de orientación peatonal para la Universidad del Valle sede Meléndez.'/>
            </MDBCol>
            <MDBCol>
              <CardPorfolio
              img='images/geoclima.png'
              title='Geoportal de Información Ambiental'
              description='actualizada para Colombia derivada de Imágenes MODIS'/>
            </MDBCol>
        </MDBRow>
        </div>
        </div>
    </div>
  )
}

export default Portfolio