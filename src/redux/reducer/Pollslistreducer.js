import * as actionType from "../action/actionType";

const initialState = {
  pollsDetail: [],
  deleteId:'',
  isDeleteId:false,
  deleteIdSuccess:''
};

export const Pollslistreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.POLLS_RECEIVE_API_DATA:
      return Object.assign({}, state, { pollsDetail: action.payload.data });

    case actionType.POLL_DELETE:
    return Object.assign({}, state ,{deleteId:action.payload})  

    case actionType.POLL_DELETE_REQUEST:
    return Object.assign({}, state,{isDeleteId:false})

    case actionType.POLL_DELETE_SUCCESS:
    return Object.assign({}, state,{isDeleteId:true,deleteIdSuccess:action.payload})

    default:
      return state;
  }
};
