const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charachters: [],
			character: {},
			charDetails: {},
			planets: [],
			planet: {},
			planetInfo: {},
			vehicles: [],
			vehicle: {},
			vehicleInfo: {},
			films: [],
			film: {},
			filmInfo: {},
			favoriteCharacters: [],
			favoritePlanets: [],
			favoriteVehicles: [],
			favoriteFilms: [],
			favoriteCount: 0,
			peopleSearch: [],
			planetSearch: [],
			vehicleSearch: [],
			relatedCharacters: [],
			relatedPlanets: [],
			relatedVehicles: []
		},
		actions: {

			getCharacters: async () => {

				const baseUrl = 'https://www.swapi.tech/api/people/';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.results;
				console.log(results);
				setStore({ charachters: results });
			},

			getPlanets: async () => {

				const baseUrl = 'https://www.swapi.tech/api/planets/';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data)
				const results = data.results;
				console.log(results);
				setStore({ planets: results });
			},

			getVehicles: async () => {

				const baseUrl = 'https://www.swapi.tech/api/vehicles/';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data)
				const results = data.results;
				console.log(results);
				setStore({ vehicles: results });
			},

			getFilms: async () => {

				const baseUrl = 'https://www.swapi.tech/api/films/';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data)
				const results = data.result;
				console.log(results);
				setStore({ films: results });
			},

			getCharacterInfo: async (id) => {
				const baseUrl = 'https://www.swapi.tech/api/people/';
				const url = baseUrl + id;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.result;
				console.log('infoDetail ', results);
				setStore({ character: results });
				setStore({ charDetails: results.properties })
			},

			getPlanetInfo: async (id) => {
				const baseUrl = 'https://www.swapi.tech/api/planets/';
				const url = baseUrl + id;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.result;
				console.log('infoDetail ', results);
				setStore({ planet: results });
				setStore({ planetInfo: results.properties });
			},

			getVehicleInfo: async (id) => {
				const baseUrl = 'https://www.swapi.tech/api/vehicles/';
				const url = baseUrl + id;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.result;
				console.log('infoDetail ', results);
				setStore({ vehicle: results });
				setStore({ vehicleInfo: results.properties });
			},

			getFilmInfo: async (id) => {
				const baseUrl = 'https://www.swapi.tech/api/films/';
				const url = baseUrl + id;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.result;
				console.log('infoDetail ', results);
				setStore({ film: results });
				setStore({ filmInfo: results.properties });
			},

			getRelatedCharacters: async (url) => {
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				}
				const data = await response.json();
				const results = data.result;
				setStore({ relatedCharacters: results });
				console.log(results);
			},

			setFavoriteChar: (newFav) => {
				setStore({ favoriteCharacters: newFav });
			},

			removeFavoriteChar: (newFav) => {
				setStore({ favoriteCharacters: newFav })
			},

			setFavoritePlan: (newFav) => {
				setStore({ favoritePlanets: newFav });
			},

			removeFavoritePlanet: (newFav) => {
				setStore({ favoritePlanets: newFav })
			},

			setFavoriteVeh: (newFav) => {
				setStore({ favoriteVehicles: newFav });
			},

			removeFavoriteVehicle: (newFav) => {
				setStore({ favoriteVehicles: newFav })
			},

			setFavoriteFilms: (newFav) => {
				setStore({ favoriteFilms: newFav });
			},

			removeFavoriteFilms: (newFav) => {
				setStore({ favoriteFilms: newFav });
			},


			getCharacterPages: async () => {

				const baseUrl = 'https://www.swapi.tech/api/people?page=2&limit=10';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.results;
				console.log(results);
			},

			setCount: (count) => {
				setStore({ favoriteCount: count });
			},

			getNextCharacters: async (page) => {
				const baseUrl = 'https://www.swapi.tech/api/people/?page=' + page + '&limit=10';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.results;
				console.log(results);
				setStore({ charachters: results });

			},

			getNextPlanets: async (page) => {
				const baseUrl = 'https://www.swapi.tech/api/planets/?page=' + page + '&limit=10';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.results;
				console.log(results);
				setStore({ planets: results });

			},

			getNextVehicles: async (page) => {
				const baseUrl = 'https://www.swapi.tech/api/vehicles/?page=' + page + '&limit=10';
				const response = await fetch(baseUrl);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				};
				const data = await response.json();
				console.log(data);
				const results = data.results;
				console.log(results);
				setStore({ vehicles: results });

			},

			searchCharacter: async (input) => {
				const baseUrl = 'https://www.swapi.tech/api/people/?name=';
				const url = baseUrl + input;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				}
				const data = await response.json();
				console.log(data);
				const results = await data.result;
				console.log(results);

				let ids = [];
				let names = [];

				await results.forEach((res) => {
					let id = res.uid;
					ids.push(id);
					let props = res.properties;
					let name = props.name;
					names.push(name);
					console.log(ids, names);
				});
				console.log(ids, names);

				const searchArray = [];

				for (let i = 0; i < names.length; i++) {
					let char = {
						name: names[i],
						id: ids[i]
					}
					searchArray.push(char);
					console.log(searchArray);
					setStore({ peopleSearch: searchArray })
				}

			},

			searchPlanets: async (input) => {
				const baseUrl = 'https://www.swapi.tech/api/planets/?name=';
				const url = baseUrl + input;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				}
				const data = await response.json();
				console.log(data);
				const results = await data.result;
				console.log(results);

				let ids = [];
				let names = [];

				await results.forEach((res) => {
					let id = res.uid;
					ids.push(id);
					let props = res.properties;
					let name = props.name;
					names.push(name);
					console.log(ids, names);
				});
				console.log(ids, names);

				const searchArray = [];

				for (let i = 0; i < names.length; i++) {
					let plan = {
						name: names[i],
						id: ids[i]
					}
					searchArray.push(plan);
					console.log(searchArray);
					setStore({ planetSearch: searchArray })
				}

			},

			searchVehicles: async (input) => {
				const baseUrl = 'https://www.swapi.tech/api/planets/?name=';
				const url = baseUrl + input;
				const response = await fetch(url);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				}
				const data = await response.json();
				console.log(data);
				const results = await data.result;
				console.log(results);

				let ids = [];
				let names = [];

				await results.forEach((res) => {
					let id = res.uid;
					ids.push(id);
					let props = res.properties;
					let name = props.name;
					names.push(name);
					console.log(ids, names);
				});
				console.log(ids, names);

				const searchArray = [];

				for (let i = 0; i < names.length; i++) {
					let vehicle = {
						name: names[i],
						id: ids[i]
					}
					searchArray.push(vehicle);
					console.log(searchArray);
					setStore({ vehicleSearch: searchArray });
				}

			}

		},
	};
};

export default getState;

// use getStore().charachters;
// use getActions().actions 
