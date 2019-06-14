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
    return{type:actionType.RECEIVE_API_DATA , payload}  
}

export function pollTitle (payload) {
    return{type:actionType.ADD_POLL_TITLE , payload }
} 

export function pollSubmit (payload) {
    return{type:actionType.SUBMIT_POLL , payload }
} 

export function pollSubmitSuccess (payload) {
    return { type:actionType.SUBMIT_POLL_SUCCESS , payload}
}

export function pollsRequestApiData () { 
    return { type:actionType.POLLS_REQUEST_API_DATA }
} 

export function pollsReceiveApiData (payload) {
    return { type:actionType.POLLS_RECEIVE_API_DATA , payload}  
}

export function pollidrequest (payload) {
    return { type:actionType.POLL_ID_REQUEST , payload }
}

export function pollidrecievedata (payload) {
    return { type:actionType.POLL_ID_RECEIVE_API_DATA, payload }
}

export function pollSetId (payload) {
    return { type:actionType.POLL_SET_ID ,payload }
}

