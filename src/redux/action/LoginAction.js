import * as actionType from './actionType';

export function userlogin(payload) {
    return { type: actionType.FILL_USERNAME, payload}
}
  
export function passwordlogin(payload) {
    return { type: actionType.FILL_PASSWORD, payload}
}

export function loginsubmit(payload) {
    return { type: actionType.LOG_SUBMIT, payload }
}

export function loginsubmitsuccess(payload) { 
    return { type: actionType.LOG_SUBMIT_SUCCESS, payload }
}

export function loginsubmitfailed(payload) {
    return {type: actionType.LOG_SUBMIT_FAILED, payload }
}

export function signUpUser(payload) {
    return { type: actionType.SIGN_USERNAME, payload}
}

export function signUpPassword(payload) {
    return { type: actionType.SIGN_PASSWORD, payload }
}

export function signUpRole(payload) {
    return { type: actionType.SIGN_ROLE, payload }
}

export function signUpSubmit(payload) {
    return { type: actionType.SIGN_SUBMIT, payload }
}

export function signUpPasswordSuccess(payload) {
    return { type: actionType.SIGN_SUBMIT_SUCCESS, payload }
}
export function requestApiData () { 
    return { type:actionType.REQUEST_API_DATA }
} 
export function receiveApiData (payload) {
    return{type:actionType.RECEIVE_API_DATA , payload}  }



