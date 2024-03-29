import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import SearchPlanets from "../component/SearchPlanets.jsx";
import PaginationPlanets from '../component/PaginationPlanets.jsx';

const Planets = () => {
    const { store, actions } = useContext(Context);
    const planets = store.planets;
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
        const currentFav = store.favoritePlanets;
        if (currentFav == id || currentFav.includes(id)) {
            return;
        }
        const newFav = [...currentFav, id];
        const favCount = store.favoriteCount;
        const newCount = favCount + 1;
        actions.setFavoritePlan(newFav);
        actions.setCount(newCount);
        console.log('fav planets: ', newFav);
    };


    return (
        <div className="container-fluid">
            <div className='d-flex flex-column align-items-center my-5'>
                <h1 className="text-center my-3">Planets</h1>
                <SearchPlanets />
            </div>
            <div className="row planets d-flex justify-content-center mt-5">
                {planets.map((plan) => {
                    return (
                        <div className="card m-2" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/planets/' + plan.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
                            <div className="card-body">
                                <h5 className="card-title">{plan.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link className='btn btn-primary cardbutton' to={'/planet/' + plan.uid}>Details</Link>
                                    <h4><i className="fa-regular fa-heart" id={plan.name} onClick={addFavorite}></i></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <PaginationPlanets />
        </div >
    );

};

export default Planets;
