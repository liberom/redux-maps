import flats from '../flats';

export function setFlats() {
  // TODO: API call! For now simulate a DB

  return {
    type: 'SET_FLATS'
    payload: flats
  };
}
