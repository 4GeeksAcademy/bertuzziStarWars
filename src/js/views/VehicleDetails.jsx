import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const VehicleDetails = () => {
  const params = useParams();
  const id = params.id;
  const { store, actions } = useContext(Context);
  const vehicle = store.vehicle;
  const vehicleInfo = store.vehicleInfo;
  const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

  function errorImg(e) {
    e.target.src = placeholderImg;
  }

  useEffect(() => {
    actions.getVehicleInfo(id);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 d-flex justify-content-center'>
          <img src={'https://starwars-visualguide.com/assets/img/vehicles/' + id + '.jpg'} className="detailImg img-fluid" alt="Responsive image" onError={errorImg} />
        </div>
        <div className='col-md-7 details'>
          <h1>{vehicleInfo.name}</h1>
          <p>{vehicle.description}</p>
          <h2>Details</h2>
          <ul>
            <li><b>Model </b>{vehicleInfo.model}</li>
            <li><b>Manufacturer: </b>{vehicleInfo.manufacturer}</li>
            <li><b>Vehicle Class: </b>{vehicleInfo.vehicle_class}</li>
          </ul>
          <h2>Specs</h2>
          <ul>
            <li><b>Length: </b>{vehicleInfo.length}</li>
            <li><b>Max Atmosphering Speed: </b>{vehicleInfo.max_atmosphering_speed}</li>
            <li><b>Passengers: </b>{vehicleInfo.surface_water}</li>
            <li><b>Cargo Capacity: </b>{vehicleInfo.cargo_capacity}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VehicleDetails
