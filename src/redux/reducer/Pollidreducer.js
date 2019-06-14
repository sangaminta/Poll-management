import * as actionType from "../action/actionType";

const initialState = {
  success: "",
  id: "",
  option: "",
  vote: [],
  voteSubmit: ""
};

export const Pollidreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.POLL_SET_ID:
      return Object.assign({}, state, { id: action.payload });

    case actionType.POLL_ID_RECEIVE_API_DATA:
      return Object.assign({}, state, { success: action.payload });

    case actionType.SELECT_POLL:
      return Object.assign({}, state, { option: action.payload });

    case actionType.SUBMIT_VOTE:
      return Object.assign({}, state, { vote: action.payload });

    case actionType.SUBMIT_VOTE_SUCCESS:
      return Object.assign({}, state, { voteSubmit: action.payload });

    default:
      return state;
  }
};
