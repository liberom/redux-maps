// No need to name the reducer function

export default function(state, action) {
  // Goal: Compute and return a new state

  if (state === undefined) {
    // Reducer initialization
    return [];
  }
  // handle some action

  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }

};


// OR:
// const flatsReducer = (state, action) => {}
// export default flatsReducer;
