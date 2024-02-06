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
    const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

    function errorImg(e) {
        e.target.src = placeholderImg;
    }

    useEffect(() => {
        actions.getFilmInfo(id);
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
                </div>
            </div>
        </div>
    )
}

export default FilmDetails