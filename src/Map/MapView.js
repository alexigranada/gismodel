import React, { useState, useEffect } from 'react';
import { MapContainer, ScaleControl, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MouseCoordinates from './MausePosition';
//import WFS from './WFS'
import ControlLayers from './ControlLayers';
import Geoman from './Geoman';

const initialPunto = {
  name: "",
  location: {
    type: ""
  },
};

const MapView = () => {
  const position = [3.505, -75.09];
  const [state, setState] = useState({
      currentLocation: {lat: '3.45', lng: '-75.35'},
      zoom: 3
  });

  const [pointData, setPointData] = useState(initialPunto);
  //Capturar Punto
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        var latitud = e.latlng.lat;
        var longitud = e.latlng.lng;


        console.log("Latitud: " + latitud);
        console.log("Longitud: " + longitud);
      },
    });
    return false;
}

  return <MapContainer center={state.currentLocation} zoom={state.zoom} scrollWheelZoom={true}>      
          <ControlLayers/>
          <ScaleControl maxWidth={200} updateWhenIdle={true}/>
          <div style={{paddingBottom: "17px"}} className="leaflet-bottom leaflet-right"> {/**className="leaflet-bottom leaflet-right" */}
            <MouseCoordinates />
          </div>
          <MapEvents />
          <Geoman/>
          
          {/**Modal*/}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Guardar Punto</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <label for="latForm" class="form-label">Latitud</label>
                      <input type="number" class="form-control" id="latForm" readonly/>
                    </div>
                    <div class="col-sm-6">
                      <label for="longForm" class="form-label">Longitud</label>
                      <input type="number" class="form-control" id="longForm" readonly/>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombreForm"/>
                  </div>
                  <div class="col-sm-12">
                    <label for="descripForm" class="form-label">Descripción</label>
                    <textarea class="form-control" id="descripForm" rows="5"></textarea>
                  </div>
                </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>   
        </MapContainer>
}

export default MapView;