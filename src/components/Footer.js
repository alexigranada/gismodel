import React from 'react';
import {
    MDBFooter,
    MDBIcon,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBNavbarLink
  } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
          <MDBFooter style={{ backgroundColor: '#192839' }} className='text-center text-lg-start text-white'>
            <section className='d-flex justify-content-center justify-content-lg-around p-4 border-bottom'>
              <div className='me-5 d-none d-lg-block'>
                <span>Nuestras redes sociales:</span>
              </div>

              <div>
                <a href='' className='me-4 text-reset'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='' className='me-4 text-reset'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='' className='me-4 text-reset'>
                  <i className='fab fa-google'></i>
                </a>
                <a href='' className='me-4 text-reset'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='' className='me-4 text-reset'>
                  <i className='fab fa-linkedin'></i>
                </a>
                <a href='' className='me-4 text-reset'>
                  <i className='fab fa-github'></i>
                </a>
              </div>
            </section>

            <section className=''>
              <div className='container text-center text-md-start mt-4'>
                <div className='row mt-2'>
                  <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-3'>
                    <h6 className='text-uppercase fw-bold mb-3'>
                      <MDBIcon fas icon="globe-americas" className='me-3'/>
                      GISMODEL
                    </h6>
                    <p>
                    Grupo de Investigación en Simulación y Modelación Dinámica Espacial
                    </p>
                  </div>

                  <div className='col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-3'>
                    <h6 className='text-uppercase fw-bold mb-3'>Contacto</h6>
                    <p>
                      <i className='fas fa-home me-3'></i> Calle 13 No 100-00 Universidad del Valle
                    </p>
                    <p>
                      <i className='fas fa-envelope me-3'></i>gismodel@correounivalle.edu.co
                    </p>
                  </div>

                  <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3'>
                    <br></br>
                    <p>
                      <i className='fas fa-phone me-3'></i>(+57) 602 3334897 Ext. 244
                    </p>
                    <p>
                      <i className='fas fa-print me-3'></i>(+57) 602 Fax 3212100 Ext. 244
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            Copyright © 2022::
              <a className='text-reset fw-bold' href='http://gismodel.univalle.edu.co/'>
                GISMODEL
              </a>
            </div>
          </MDBFooter>
          );
};

export default Footer