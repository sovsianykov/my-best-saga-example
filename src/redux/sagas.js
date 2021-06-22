import {errorMessage, FETCH_DATA, startRequest, success} from "./actions";
import {takeEvery,put, call } from 'redux-saga/effects'
import axios from "axios";

 export function* watchFetch() {
    yield takeEvery( FETCH_DATA , fetchWorkerAsync )
}

function* fetchWorkerAsync({ url  }) {
       try {
           yield put(startRequest())
           const data = yield call(()=>{
               return axios.get(url)
                   .then(res =>res.data)
           });
           yield put(success(data));
       } catch (error) {
           yield put(errorMessage())
       }
}