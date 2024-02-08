import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PaginationPlanets from '../component/PaginationPlanets.jsx';

const Films = () => {
    const { store, actions } = useContext(Context);
    const films = store.films;
    const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

    function errorImg(e) {
        e.target.src = placeholderImg;
    }

    function addFavorite(e) {
        const id = e.target.id;
        e.target.className = 'fa-solid fa-heart';
        setTimeout(() => {
            e.target.className = 'fa-regular fa-heart';
        }, 500);
        console.log(id);;
        const currentFav = store.favoriteFilms;
        if (currentFav == id || currentFav.includes(id)) {
            return;
        }
        const newFav = [...currentFav, id];
        const favCount = store.favoriteCount;
        const newCount = favCount + 1;
        actions.setFavoriteFilms(newFav);
        actions.setCount(newCount);
        console.log('fav films: ', newFav)
    };

    return (
        <div className="container-fluid ">
            <div className='d-flex flex-column align-items-center my-5'>
                <h1 className="text-center my-3">Films</h1>
            </div>
            <div className="row characters d-flex justify-content-center mt-5">
                {films.map((film) => {
                    return (
                        <div className="card m-4" style={{ width: '20rem' }}>
                            <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/films/' + film.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
                            <div className="card-body">
                                <h5 className="card-title">{film.properties.title}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link className='btn btn-primary cardbutton' to={'/films/' + film.uid}>Details</Link>
                                    <h4><i className="fa-regular fa-heart" id={film.uid} onClick={addFavorite}></i></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Films