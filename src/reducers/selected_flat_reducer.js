import { SELECT_FLAT } from '../actions';

export default function(state, action) {
  // Initialization
  if (state === undefined) {
    return null;
  }

  // Handle action
  switch (action.type) {
    case SELECT_FLAT:
      return action.payload;
    default:
      return state;
  }

}
