// import flats from '../data/flats';

export function setFlats() {
  // TODO: API call! For now simulate a DB
  return fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SET_FLATS',
        payload: data
      };
  });

  return {
    type: 'SET_FLATS',
    payload: flats
  };
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }

}
