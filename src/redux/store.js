import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { roomsReducer } from './roomsReducer';
import { reservationsReducer } from './reservationsReducer';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  reservations: reservationsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
