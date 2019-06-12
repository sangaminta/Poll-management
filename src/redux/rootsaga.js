import { takeLatest,put } from 'redux-saga/effects';
import axios from 'axios'
import {loginsubmitfailed, loginsubmitsuccess, signuppasswordsucc } from './action/LoginAction'

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

function* signupuser (action) {
    try{
        const response = yield axios.get(`https://secure-refuge-14993.herokuapp.com/add_user?username=${action.payload.username}&password=${action.payload.password}&role=${action.payload.role}`).then((response)=>{
            return response
        })
        if(response){
            yield put(signuppasswordsucc(response.data))
        }
    }
    catch(e){
        yield
    }
}

function* watchAction() {
    yield takeLatest ("LOG_SUBMIT" , loginuser);
    yield takeLatest ("SIGN_SUBMIT" , signupuser)
}
 
export default function* mySaga(){
    yield watchAction();
}
     
 


   