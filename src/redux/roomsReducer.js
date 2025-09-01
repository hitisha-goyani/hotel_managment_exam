const initial = { list: [], loading: false, error: null };
export const roomsReducer = (state = initial, action) => {
  switch (action.type) {
    case 'FETCH_ROOMS_REQUEST': return { ...state, loading: true };
    case 'FETCH_ROOMS_SUCCESS': return { list: action.payload, loading: false, error: null };
    case 'FETCH_ROOMS_FAILURE': return { loading: false, error: action.payload, list: [] };
    default: return state;
  }
};
