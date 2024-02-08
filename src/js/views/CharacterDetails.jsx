import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CharacterDetails = () => {

  const { store, actions } = useContext(Context);
  const character = store.character;
  const charDetails = store.charDetails;

  const params = useParams();
  const id = params.id;
  const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

  function errorImg(e) {
    e.target.src = placeholderImg;
  }

  useEffect(() => {
    actions.getCharacterInfo(id);
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 details d-flex justify-content-center'>
          <img src={'https://starwars-visualguide.com/assets/img/characters/' + id + '.jpg'} className="detailImg img-fluid" alt="Responsive image" onError={errorImg} />
        </div>
        <div className='col-md-7 details'>
          <h1>{charDetails.name}</h1>
          <p>{character.description}</p>
          <h2>About</h2>
          <ul>
            <li><b>Birth Year: </b>{charDetails.birth_year}</li>
            <li><b>Gender: </b>{charDetails.gender}</li>
          </ul>
          <h2>About</h2>
          <ul>
            <li><b>Body Height: </b>{charDetails.height + ' cm'}</li>
            <li><b>Body Mass: </b>{charDetails.mass}</li>
            <li><b>Eye Color: </b>{charDetails.eye_color}</li>
            <li><b>Hair Color: </b>{charDetails.hair_color}</li>
            <li><b>Skin Color: </b>{charDetails.skin_color}</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default CharacterDetails
