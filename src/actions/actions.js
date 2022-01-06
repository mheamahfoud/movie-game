
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR,
  } from "./types";
  import GamesService from "../services/game.service";

  export  const fetchGamesList = () => (dispatch) => {
    dispatch({
        type: FETCH_REQUEST,
      });
    return GamesService.getAll().then(
      (response) => {
        
        dispatch({
            type: FETCH_SUCCESS,
            payload: response.data
          });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: FETCH_ERROR,
        });
        return Promise.reject();
      }
    );
  };

//   export  const  fetchGamesRequest = () =>{
//     return {
//         type: FETCH_REQUEST
//       }
//   }
  
//   export  const  fetchGamesSuccess = () =>{
//     return {
//         type: FETCH_SUCCESS,
//         payload
//       }
//   }

//   export  const  fetchGamesError = () =>{
//     return {
//         type: FETCH_ERROR
//       }
//   }
