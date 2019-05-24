import { FETCH_HELLO, FETCH_ALL_ITEM, ITEM_SELECTED} from '../actions/data';

export default function data(state = { data: [], selectedItem:[], message: '' }, action) {
	let newState = state ;
  switch (action.type) {
    case FETCH_HELLO:
      return { data: [...state.data], message: action.payload };
    case FETCH_ALL_ITEM:
      return { 
        ...state, 
        data: action.payload
       };
    case ITEM_SELECTED:
      return {
        ...state,
        // selectedItem: [...state.selectedItem, action.itemName]
        selectedItem: [...state.selectedItem, action.itemName].filter((v, i, a) => a.indexOf(v) === i)
      }
    default:
      return state;
  }
}
