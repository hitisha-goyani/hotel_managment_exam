const initial = { list: [], loading: false, error: null };
export const reservationsReducer = (state = initial, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS_REQUEST': return { ...state, loading: true };
    case 'FETCH_RESERVATIONS_SUCCESS': return { list: action.payload, loading: false, error: null };
    case 'FETCH_RESERVATIONS_FAILURE': return { loading: false, error: action.payload, list: [] };
    case 'ADD_RESERVATION_SUCCESS': return { ...state, list: [...state.list, action.payload] };
    case 'DELETE_RESERVATION_SUCCESS': return { ...state, list: state.list.filter(r => r.id !== action.payload) };
    default: return state;
  }
};
