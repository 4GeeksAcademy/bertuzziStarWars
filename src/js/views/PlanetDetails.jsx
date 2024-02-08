import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const PlanetDetails = () => {

  const { store, actions } = useContext(Context);
  const planet = store.planet;
  const planetInfo = store.planetInfo;
  const params = useParams();
  const id = params.id;
  const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

  function errorImg(e) {
    e.target.src = placeholderImg;
  }

  useEffect(() => {
    actions.getPlanetInfo(id);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 d-flex justify-content-center'>
          <img src={'https://starwars-visualguide.com/assets/img/planets/' + id + '.jpg'} className="detailImg img-fluid" alt="Responsive image" onError={errorImg} />
        </div>
        <div className='col-md-7 details'>
          <h1>{planetInfo.name}</h1>
          <p>{planet.description}</p>
          <h2>Details</h2>
          <ul>
            <li><b>Population: </b>{planetInfo.population}</li>
            <li><b>Climate: </b>{planetInfo.climate}</li>
            <li><b>Terrain: </b>{planetInfo.terrain}</li>
          </ul>
          <h2>Specs</h2>
          <ul>
            <li><b>Diameter: </b>{planetInfo.diameter}</li>
            <li><b>Rotation Speed: </b>{planetInfo.rotation_speed}</li>
            <li><b>Surface Water: </b>{planetInfo.surface_water}</li>
            <li><b>Orbital Period: </b>{planetInfo.orbital_period}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default PlanetDetails
