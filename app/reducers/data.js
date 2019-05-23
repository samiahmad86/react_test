import { FETCH_HELLO, FETCH_ALL_ITEM } from '../actions/data';

export default function data(state = { data: [],  message: '' }, action) {
	let newState = state ;
  switch (action.type) {
    case FETCH_HELLO:
      return { data: [...state.data], message: action.payload };
    case FETCH_ALL_ITEM:
      return { 
        ...state, 
        data: action.payload
       };
    default:
      return state;
  }
}
