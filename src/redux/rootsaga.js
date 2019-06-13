import { takeLatest,put } from 'redux-saga/effects';
import axios from 'axios'
import {loginsubmitfailed,loginsubmitsuccess} from './action/LoginAction'

function* loginuser (action) {
        try{
            const response = yield axios.get(`https://secure-refuge-14993.herokuapp.com/login?username=${action.payload.username}&password=${action.payload.password}`).then((response)=>{
                    return response
            }) 
            if(response){
                yield put(loginsubmitsuccess(response.data))
            }
        }    
        catch(e){
            yield put(loginsubmitfailed (e.response))
        }
    }

function* watchAction() {
    yield takeLatest("LOG_SUBMIT", loginuser);
}
 
export default function* mySaga(){
    yield watchAction();
}
     
 


   