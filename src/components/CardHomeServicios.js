import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBContainer,
    MDBTypography,
    MDBRow, MDBCol, MDBCard, MDBRipple, MDBCardImage, MDBCardBody, MDBCardFooter, MDBCardTitle, MDBCardText, MDBBtn, MDBCardOverlay
  } from 'mdb-react-ui-kit';

import CardProfile from './CardProfile';

const CardHomeServicios = () => {
  return (

      <div className='pb-5' style={{ backgroundColor: 'ghostwhite', borderTop: '1px solid #B8C8DA', borderBottom: '1px solid #B8C8DA'}}>
        {/*<MDBContainer>
            <MDBCarousel showIndicators showControls>
              <MDBCarouselInner >
                <MDBCarouselItem className='active'> 
                  {/*<MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />*/}
                  {/*<MDBRow className='row-cols-1 row-cols-md-1 row-cols-lg-1 p-3'>
                      <MDBCol>
                        <MDBCard background='dark' className='text-white' alignment='center'>                       
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage style={{height: '300px', width: '100%'}} fluid src='images/gdb.jpg' alt='...' />
                            </MDBRipple>
                            <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                              <MDBCardTitle>Bases de Datos Espacial</MDBCardTitle>
                              <MDBCardText>
                                El fundamento estructural del análisis espacial es la base de datos espacial.  La consolidación de la información espacial proveniente de diferentes fuentes (vectores: digitalización, vectorización, levantamientos de campo, servicios Web, censos, entre otros; o raster: fotografìas aéreas, sensoramiento remoto, o superficies raster) junto con la información no espacial (características o atributos de los datos espaciales), proporcionan los elementos para el análisis espacial de los eventos que queremos explicar.
                              </MDBCardText>
                            </MDBCardOverlay>                            
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem>
                    <MDBRow className='row-cols-1 row-cols-md-1 row-cols-lg-1 p-3'>
                      <MDBCol>
                        <MDBCard background='dark' className='text-white' alignment='center'>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage style={{height: '300px', width: '100%'}} fluid src='/images/40.jpg' alt='...' />
                                </MDBRipple >
                            <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <MDBCardTitle>Análisis Espacial</MDBCardTitle>
                                <MDBCardText>
                                El proceso de integración de la información espacial usando la diversidad de capas o temas creados para el análisis, al igual que conociendo el tipo de dato que almacena cada capa, su relevancia, actualidad o condición histórica, permiten identificar relaciones o afectaciones entre los temas para establecer dependencias o influencias que con solo la información tabular no es posible identificar.  Igualmente la disponibilidad de la información dispuesta en un mismo sistema de referencia permite analizarla y establecer patrones o modelos de comportamiento de las variables, bien sea matemáticos, determiísticos o estocásticos, que permitan simular el comportamiento de las variables, para así ayudar a explicar eventos pasados o potenciales ocurrencias como escenarios de predicción.  Estos escenarios de predicción permitirán tomar decisiones oportunamente para atender situaciones que puedan ayudar a mitigar consecuencias de procesos naturales o antrópicos que se manifiesten según las condiciones dadas.
                                </MDBCardText>
                            </MDBCardOverlay> 
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem>
                    <MDBRow className='row-cols-1 row-cols-md-2 row-cols-lg-2 p-3'>                     
                      <MDBCol>
                        <MDBCard background='dark' className='text-white' alignment='center'>                       
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage style={{height: '300px', width:'100%'}} fluid src='/images/31.jpg' alt='...' />
                                </MDBRipple>
                                <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <MDBCardTitle>Manejo de información multiespectral, a partir de imágenes capturadas por vehículos aéreos no tripulados (UAV)</MDBCardTitle>
                                <MDBCardText>
                                    Los sistemas aéreos no tripulados se han convertido en una herramienta indispensable para la captura de información terrestre a una escala detallada. Además, permite el análisis de información superficial a través de procesamiento de imágenes.
                                </MDBCardText>
                            </MDBCardOverlay>                            
                        </MDBCard>
                      </MDBCol>
                    
                      <MDBCol>
                        <MDBCard background='dark' className='text-white' alignment='center'>                       
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage style={{height: '300px'}} fluid src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' />
                                </MDBRipple>
                                <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <MDBCardTitle>Interacción directa con el SIG en tiempo real</MDBCardTitle>
                                <MDBCardText>
                                    Se concibe como una plataforma para acceder a la base de datos espacial en tiempo real, alimentandola e incluyendo cambios que se detectan en campo como por ejemplo transformaciones de predios en catastro, cambios en sentidos de vías, condiciones de accesibilidad, entre otros, y que son indispensables en funciones misionales de las entidades.
                                </MDBCardText>
                            </MDBCardOverlay>                            
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem>    
                    <MDBRow className='row-cols-1 row-cols-md-1 row-cols-lg-1 p-3'>
                      <MDBCol>
                        <MDBCard background='dark' className='text-white' alignment='center'>                       
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage style={{height: '300px', width: '100%'}} fluid src='/images/nasa.jpg' alt='...' />
                                </MDBRipple>
                                <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <MDBCardTitle>Modelación espacial, simulación e integración de escenarios y generación de pronósticos</MDBCardTitle>
                                <MDBCardText>
                                La integración de información espacial, bases de datos espacio-temporales y escenarios potenciales de cambios de condiciones como por ejemplo el cambio climático y la variabilidad climática, un desarrollo vial, un evento catastrófico como una creciente súbita, una inundación o un deslizamiento, proporcionan alteraciones en los recursos, la infraestructura, la forma de vida o de desarrollo de una comunidad.  La aplicación de conocimiento científico para la creación o adaptación de modelos bien sean determinísticos, estocásticos o empíricos permiten generar información y nuevos escenarios del estado, evolución y tendencia de las variables de interés para apoyar la toma de decisiones de todos los actores involucrados en los procesos.  
                                </MDBCardText>
                            </MDBCardOverlay>                            
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem>    
                    <MDBRow className='row-cols-1 row-cols-md-1 row-cols-lg-1 p-3'>
                      <MDBCol>
                        <MDBCard background='dark' className='text-white' alignment='center'>                       
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage style={{height: '300px', width: '100%'}} fluid src='/images/earth.jpg' alt='...' />
                                </MDBRipple>
                                <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <MDBCardTitle>Seguimiento y monitoreo en tiempo Real</MDBCardTitle>
                                <MDBCardText>
                                Estos procesos se hacen mediante la articulación de las estructuras de información espacial con elementos de hardware que colecta de información, bien pueden ser aplicaciones de software para ser instaladas en dispositivos móviles como celulares, tablets, colectores de información con conexión directa a Internet, o también equipos especiales para dichos propósitos como estaciones hidrometeorolóficas, aforadores o peajes de tránsito, drones, red de cámaras de monitoreo de espacios, entre otros.  Todos ellos diseñados para recolectar información en tiempo real y transmitirla a la base de datos espacial para ser acondicionada, procesada, almacenada e incorporada en las rutinas de análisis espacial en tiempo real para el conocimiento del estado, tendencia o evolución de un determinado evento, y así poder tomar las decisiones necesarias oportunamente.   
                                </MDBCardText>
                            </MDBCardOverlay>                            
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                </MDBCarouselItem>
                {/*<MDBCarouselItem>
                  <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
  </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>*/}
        <MDBContainer className='p-4'> {/*style={{borderTop: '1px solid #B8C8DA', borderBottom: '1px solid #B8C8DA'}}*/}
        
        <MDBTypography variant='h1' className='text-center text-dark my-5'>Integrantes</MDBTypography>
          <MDBRow>
            <MDBCol className='d-flex justify-content-center'>
              <CardProfile
                src='images/rincon.png'
                nombre='Mauricio E. Rincon R.'
                titulo='Director de Laboratorio'
                universidad='Universidad del Valle'
                area='Área de Geomatica'
              />
            </MDBCol>
            <MDBCol>
            <CardProfile
                src='images/preciado.jpg'
                nombre='Monica Preciado V.'
                titulo='Docente PhD'
                universidad='Universidad del Valle'
                area='Área de Geomatica'
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-4'>
            <MDBCol>
              <MDBCard className='rounded-0' style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='images/granada.png' alt='...' fluid />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle>A. Alexis Granada G.</MDBCardTitle>
                      <MDBCardText>
                        Estudiante
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>Ingenieria Topográfica</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className='rounded-0' style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='images/cardona.jpg' alt='...' fluid />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle>Sergio Cardona M.</MDBCardTitle>
                      <MDBCardText>
                        Estudiante
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>Ingenieria Topográfica</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className='rounded-0' style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='images/Mosquera.png' alt='...' fluid />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle>Zully Mosquera B.</MDBCardTitle>
                      <MDBCardText>
                        Estudiante
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>Ingenieria Topográfica</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          {/*<MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-3'>
            <MDBCol>
              <MDBCard className='h-80 mx-auto'>
                <MDBCardImage className='mx-auto' style={{width: 180, height: 250, backgroundColor: "rgba(0, 0, 255, 0.1)"}}
                  src='images/Granada.png'
                  alt='...'
                  position='auto'
                />
                <MDBCardBody>
                  <MDBCardTitle>A. Alexis Granada G.</MDBCardTitle>
                  <MDBCardText>
                    Estudiante Ingeniería Topográfica.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className='h-80'>
                <MDBCardImage className='mx-auto' style={{width: 180, height: 250, backgroundColor: "rgba(0, 0, 255, 0.1)"}}
                  src='images/cardona.jpg'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>Sergio Cardona M.</MDBCardTitle>
                  <MDBCardText>Estudiante Ingeniería Topográfica.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className='h-80'>
                <MDBCardImage className='mx-auto' style={{width: 180, height: 250, backgroundColor: "rgba(0, 0, 255, 0.1)"}}
                  src='images/Mosquera.png'
                  alt='...'
                  position='top'
                  width="150"
                />
                <MDBCardBody>
                  <MDBCardTitle>Zully Mosquera B.</MDBCardTitle>
                  <MDBCardText>
                    Estudiante Ingeniería Topográfica.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
      </MDBRow>*/}
        </MDBContainer>
      </div>
  )
}

export default CardHomeServicios