import * as actionType from "./actionType";

export function userlogin(payload) {
  return { type: actionType.FILL_USERNAME, payload };
}

export function passwordlogin(payload) {
  return { type: actionType.FILL_PASSWORD, payload };
}

export function loginsubmit(payload) {
  return { type: actionType.LOG_SUBMIT, payload };
}

export function loginsubmitsuccess(payload) {
  return { type: actionType.LOG_SUBMIT_SUCCESS, payload };
}

export function loginsubmitfailed(payload) {
  return { type: actionType.LOG_SUBMIT_FAILED, payload };
}

export function signUpUser(payload) {
  return { type: actionType.SIGN_USERNAME, payload };
}

export function signUpPassword(payload) {
  return { type: actionType.SIGN_PASSWORD, payload };
}

export function signUpRole(payload) {
  return { type: actionType.SIGN_ROLE, payload };
}

export function signUpSubmit(payload) {
  return { type: actionType.SIGN_SUBMIT, payload };
}

export function signUpPasswordSuccess(payload) {
  return { type: actionType.SIGN_SUBMIT_SUCCESS, payload };
}
export function requestApiData() {
  return { type: actionType.REQUEST_API_DATA };
}

export function receiveApiData(payload) {
  return { type: actionType.RECEIVE_API_DATA, payload };
}

export function pollTitle(payload) {
  return { type: actionType.ADD_POLL_TITLE, payload };
}

export function pollSubmit(payload) {
  return { type: actionType.SUBMIT_POLL, payload };
}

export function pollSubmitSuccess(payload) {
  return { type: actionType.SUBMIT_POLL_SUCCESS, payload };
}

export function pollsRequestApiData() {
  return { type: actionType.POLLS_REQUEST_API_DATA };
}

export function pollsReceiveApiData(payload) {
  return { type: actionType.POLLS_RECEIVE_API_DATA, payload };
}

export function pollidrequest(payload) {
  return { type: actionType.POLL_ID_REQUEST, payload };
}

export function pollidrecievedata(payload) {
  return { type: actionType.POLL_ID_RECEIVE_API_DATA, payload };
}

export function pollSetId(payload) {
  return { type: actionType.POLL_SET_ID, payload };
}

export function selectOption(payload) {
  return { type : actionType.SELECT_POLL, payload}
}

export function userdovote(payload) {
  return { type: actionType.SUBMIT_VOTE, payload}
}

export function uservotesuccess(payload) {
  return { type :actionType.SUBMIT_VOTE_SUCCESS, payload}
}

export function isedit(payload) {
  return { type: actionType.EDIT_TITLE_VALUE,payload}
}

export function edit_text(payload) {
  return { type: actionType.EDIT_TITLE_TEXT_VALUE, payload}
}

export function addtitle(payload) {
  return { type:actionType.ADD_UPDATE_TITLE, payload}
}

export function addtitlesuccess(payload) {
  return {type: actionType.ADD_UPDATE_TITLE_SUCCESSS, payload}
}

export function deleteoption(payload) {
  return {type: actionType.DELETE_POLL_OPTION, payload}
}

export function deleteoptionRequest(payload) {
  return { type: actionType.DELETE_POLL_OPTION_REQUEST, payload }
}

export function deleteoptionsuccess(payload) {
  return { type: actionType.DELETE_POLL_OPTION_SUCCESS, payload }
}

export function addOption(payload) {
  return { type: actionType.ADD_NEW_OPTION, payload}
}

export function takeNewOptionValue(payload) {
  return { type: actionType.TAKE_NEW_OPTION , payload}
}

export function submitNewOptionValue(payload) {
  return { type: actionType.SUBMIT_NEW_OPTION , payload}
}

export function submitNewOptionValueRequest(payload) {
  return { type: actionType.SUBMIT_NEW_OPTION_REQUEST , payload}
}

export function submitNewOptionValueSuccess(payload) {
  return { type: actionType.SUBMIT_NEW_OPTION_SUCCESS , payload}
}