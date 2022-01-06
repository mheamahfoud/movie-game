import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions/types";
const initState = {
 isLoading:false,
 isError:false,
 games:[]
}
export default function (state=initState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS: 
      return {
        ...state,
        games: action.payload,
        isLoading:false
      };
    default:
      return {
        ...state,
        isError: true,
      };
  }
}