import { takeLatest,put } from 'redux-saga/effects';
import axios from 'axios'
import {loginsubmitfailed, loginsubmitsuccess, signUpPasswordSuccess, receiveApiData, pollSubmitSuccess  } from './action/LoginAction'

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

function* signUpUser (action) {
    try{
        const response = yield axios.get(`https://secure-refuge-14993.herokuapp.com/add_user?username=${action.payload.userName}&password=${action.payload.passWord}&role=${action.payload.role}`).then((response)=>{
            return response
        })
        if(response){
            yield put(signUpPasswordSuccess(response.data))
        }
    }
    catch(e){
        yield 
    }
}

function* requestApiData (action) {
    try{
        const response = yield axios.get(`https://secure-refuge-14993.herokuapp.com/list_users`).then((response)=>{
            return response
        })
        if(response){
            yield put(receiveApiData(response.data))
        }
    }
    catch(e){
        yield
    }
}

function* pollSubmit (action) {
    try{
        const response = yield axios.get(`https://secure-refuge-14993.herokuapp.com/add_poll?title=${action.payload.pollTitle}&options=${action.payload.option1}____${action.payload.option2}____${action.payload.option3}____${action.payload.option4}`)
        .then((response) =>{
            return response
        })
        if(response){
            yield put(pollSubmitSuccess(response.data) )
        }
    }
    catch(e){
        yield
    }
}

function* watchAction() {
    yield takeLatest ("LOG_SUBMIT" , loginuser);
    yield takeLatest ("SIGN_SUBMIT" , signUpUser);
    yield takeLatest ("REQUEST_API_DATA", requestApiData);
    yield takeLatest ('SUBMIT_POLL', pollSubmit);
}
 
export default function* mySaga(){
    yield watchAction();
}
     
 


   