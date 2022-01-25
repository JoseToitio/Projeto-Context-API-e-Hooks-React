const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function requestAPI() {
  const response = await fetch(url)
    .then((res) => res.json());

  return response;
}

export default requestAPI;
