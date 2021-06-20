import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from "./apiReducer";
export const FETCH_DATA = 'FETCH_DATA'

export const startRequest = () =>{
    return  {type: FETCH_START }
}
export  const success = (data) =>{
    return  {type: FETCH_SUCCESS, payload: data  }
}
export const errorMessage = () =>{
    return  {type: FETCH_FAILURE }
}
export const fetchData = () =>{
    return  {type: FETCH_DATA }
}
