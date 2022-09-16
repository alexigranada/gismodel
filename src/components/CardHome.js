import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardImage, MDBRipple, MDBBtn, MDBCardLink, MDBRow, MDBCol, MDBContainer, MDBCardOverlay } from 'mdb-react-ui-kit';

const CardHome = () => {
  return (
    <div style={{ backgroundColor: 'white'}}>
        {/*<MDBCard className='px-5'>
        <MDBCardBody className='container pt-3 px-5 mx-5'>
          <MDBCardTitle className="fs-1 text-center">GISMODEL</MDBCardTitle>
          <MDBCardText>
          La integración de la tecnología,la información espacial y la ciencia e investigación facultan la posibilidad de generar conocimiento que permite apoyar la toma de decisiones en cualquier àmbito. Todo lo que existe en alguna parte de la superficie de la tierra y en un momento de su historia, es susceptible de ser representado en una base de datos espacial y ser integrado a un Sistema de Información Geográfica (SIG). Esto constituye una herramienta poderosa para entender las relaciones espaciales entre los elementos, sus dependencias, efectos e impactos con el entorno, los recursos, los medios naturales, y la interacción de ellos con el hombre o la sociedad.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage className='container-sm px-5' position='bottom' src='/images/gismodel.png' alt='...' />
  </MDBCard>*/}
      <MDBContainer>
        <MDBRow>
          <MDBCol className='p-1 mt-5'><MDBCardImage className='img-fluid mt-5' position='center' src='/images/gismodel.png' alt='...' /></MDBCol>
          <MDBCol className='p-5' >
            <h2 className='text-center text-dark'>GISMODEL</h2>
            <p className='text-center' >La integración de la tecnología,la información espacial y la ciencia e investigación facultan la posibilidad de generar conocimiento que permite apoyar la toma de decisiones en cualquier àmbito. Todo lo que existe en alguna parte de la superficie de la tierra y en un momento de su historia, es susceptible de ser representado en una base de datos espacial y ser integrado a un Sistema de Información Geográfica (SIG). Esto constituye una herramienta poderosa para entender las relaciones espaciales entre los elementos, sus dependencias, efectos e impactos con el entorno, los recursos, los medios naturales, y la interacción de ellos con el hombre o la sociedad.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/*<MDBContainer className='py-5'>
        <MDBRow>
          <MDBCol>
            <div className='card__home'>
              <MDBCardBody>
                <MDBCardTitle className='text-dark'>BDE</MDBCardTitle>
                <MDBCardSubTitle>Bases de Datos Espacial</MDBCardSubTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Another link</MDBCardLink>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol>
            <div className='card__home'>
              <MDBCardBody>
                <MDBCardTitle className='text-dark'>Ánalisis Espacial</MDBCardTitle>
                <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Another link</MDBCardLink>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol>
            <div className='card__home'>
              <MDBCardBody>
                <MDBCardTitle className='text-dark'>Card title</MDBCardTitle>
                <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Another link</MDBCardLink>
              </MDBCardBody>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className='pt-5'>
          <MDBCol>
            <div className='card__home'>
              <MDBCardBody>
                <MDBCardTitle className='text-dark'>Card title</MDBCardTitle>
                <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Another link</MDBCardLink>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol>
            <div className='card__home'>
              <MDBCardBody>
                <MDBCardTitle className='text-dark'>Card title</MDBCardTitle>
                <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Another link</MDBCardLink>
              </MDBCardBody>
            </div>
          </MDBCol>
          <MDBCol>
            <div className='card__home'>
              <MDBCardBody>
                <MDBCardTitle className='text-dark'>Card title</MDBCardTitle>
                <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Another link</MDBCardLink>
              </MDBCardBody>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className='pt-5'>
          <MDBCol>
            <MDBCard background='dark' className='text-white ' alignment='center'>                       
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded'>
                    <MDBCardImage style={{height: '300px', width: '100%'}} fluid src='images/gdb.jpg' alt='...' />
                </MDBRipple>
                <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <MDBCardTitle>Bases de Datos Espacial</MDBCardTitle>
                  <MDBCardText>
                    El fundamento estructural del análisis espacial es la base de datos espacial.  La consolidación de la información espacial proveniente de diferentes fuentes (vectores: digitalización, vectorización, levantamientos de campo, servicios Web, censos, entre otros; o raster: fotografìas aéreas, sensoramiento remoto, o superficies raster)
                  </MDBCardText>
                </MDBCardOverlay>                            
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard background='dark' className='text-white' alignment='center'>
              <MDBRipple style={{height: '300px'}} rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow rounded'>
                <img src='images/gdb.jpg' className='w-100 ' style={{height: '300px'}} />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.1)' }}>
                  </div>
                </a>
              <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <MDBCardTitle>Bases de Datos Espacial</MDBCardTitle>
                <MDBCardText>
                  El fundamento estructural del análisis espacial es la base de datos espacial.  La consolidación de la información espacial proveniente de diferentes fuentes (vectores: digitalización, vectorización, levantamientos de campo, servicios Web, censos, entre otros; o raster: fotografìas aéreas, sensoramiento remoto, o superficies raster)
                </MDBCardText>
                <MDBCardLink href='#'>Card link</MDBCardLink>
              </MDBCardOverlay>
              </MDBRipple>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard background='dark' className='text-white' alignment='center'>
              <MDBRipple style={{height: '300px'}} rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow rounded'>
                <img src='images/40.jpg' className='w-100 ' style={{height: '300px'}} />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.1)' }}>
                  </div>
                </a>
              <MDBCardOverlay className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <MDBCardTitle>Análisis Espacial</MDBCardTitle>
                <MDBCardText className='mb-0'>
                  El proceso de integración de la información espacial usando la diversidad de capas o temas creados para el análisis. al igual que conociendo el tipo de dato que almacena cada capa su relevancia, actualidad o condición histórica, permiten identificar relaciones o afectaciones entre los temas para establecer dependencias.
                </MDBCardText>
                <MDBCardLink className='text-info mt-0' href='#'>Leer más</MDBCardLink>
              </MDBCardOverlay>
              </MDBRipple>
            </MDBCard>
          </MDBCol>
        </MDBRow>
</MDBContainer>*/}
    </div>
  )
}

export default CardHome