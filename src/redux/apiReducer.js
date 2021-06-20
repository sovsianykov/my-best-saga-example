export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
    list : [],
    loading : false,
    error : false
}



function apiReducer(state= initialState, action ) {
       switch (action.type) {
           case FETCH_START :
               return {
                   list : [],
                   loading : false,
                   error : false
               };
           case FETCH_SUCCESS :
               return {
                   list : action.payload,
                   loading : false,
                   error : false
               };
           case FETCH_FAILURE :
               return {
                   list : [],
                   loading : false,
                   error : true
               };
           default :
               return state
       }
}

export default apiReducer;