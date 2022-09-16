import React from 'react';
import MapView from '../Map/MapView';
import ModalPunto from '../components/ModalPunto';
import { MDBBtnGroup, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Geoportal = () => {
  return (
    
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src="/images/space.mp4" type ='video/mp4' />
      </video>
      <MapView></MapView>
      
      <MDBBtnGroup id="mapControls" shadow='0' className='d-flex justify-content-evenly'>
        <MDBBtn title="Crear punto" color='link'>Left</MDBBtn>
        <MDBBtn color='link'>Middle</MDBBtn>
        <MDBBtn color='link'>Right</MDBBtn>
                
      </MDBBtnGroup>
      <button className="menuCanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><MDBIcon fas icon="compress"/></button>
      <div div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">MENU</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Geoproyecto en construcción</p>
          {/**Button trigger modal */}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Guardar
          </button>
          </div>
      </div>
    </div>
  )
}

export default Geoportal;