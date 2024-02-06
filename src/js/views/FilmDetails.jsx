import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const FilmDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const id = params.id;
    const film = store.film;
    const filmInfo = store.filmInfo;
    const characters = filmInfo.characters;
    const vehicles = filmInfo.vehicles;
    const planets = filmInfo.planets;
    const relatedCharacters = store.relatedCharacters;
    const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

    function errorImg(e) {
        e.target.src = placeholderImg;
    }

    useEffect(() => {
        actions.getFilmInfo(id);
        characters.forEach((char) => {
            actions.getRelatedCharacters(char);
            console.log(relatedCharacters);
        })
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-5 d-flex justify-content-center'>
                    <img src={'https://starwars-visualguide.com/assets/img/films/' + id + '.jpg'} className="detailImg img-fluid" alt="Responsive image" onError={errorImg} />
                </div>
                <div className='col-md-7 details'>
                    <h1>{filmInfo.title}</h1>
                    <p>{film.description}</p>
                    <h2>Opening Crawl</h2>
                    <p>{filmInfo.opening_crawl}</p>
                    <h2>Details</h2>
                    <ul>
                        <li><b>Director: </b>{filmInfo.director}</li>
                        <li><b>Director: </b>{filmInfo.producer}</li>
                        <li><b>Release Date: </b>{filmInfo.release_date}</li>
                    </ul>
                    <h2>Specs</h2>
                    <ul>
                        <li><b>Diameter: </b>{filmInfo.title}</li>
                        <li><b>Rotation Speed: </b>{filmInfo.title}</li>
                        <li><b>Surface Water: </b>{filmInfo.title}</li>
                        <li><b>Orbital Period: </b>{filmInfo.title}</li>
                    </ul>
                    <h2>Characters</h2>
                    {relatedCharacters.map((char) => {
                        return (
                            <div className="card m-4" style={{ width: '20rem' }}>
                                <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/characters/' + char.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
                                <div className="card-body">
                                    <h5 className="card-title">{char.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <Link className='btn btn-primary cardbutton' to={'/character/' + char.uid}>Details</Link>
                                        <h4><i className="fa-regular fa-heart" id={char.name} onClick={addFavorite}></i></h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FilmDetails