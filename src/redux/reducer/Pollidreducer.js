import * as actionType from "../action/actionType";

const initialState = {
  success: {},
  id: "",
  option: "",
  vote: [],
  voteSubmit: "",
  isEdit: false,
  changedTittle: "",
  updateted: "",
  updateted_success: "",
  delete_option: "",
  delete_option_success: "",
  isDeleteSuccess: false,
  isAddOption: false,
  newOption: "",
  submitNewOption:'',
  isAddOptionSuccess:false,
  addOptionSuccess:''
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

    case actionType.EDIT_TITLE_VALUE:
      return Object.assign({}, state, { isEdit: action.payload });

    case actionType.EDIT_TITLE_TEXT_VALUE:
      return Object.assign({}, state, {
        success: {
          ...state.success,
          data: { ...state.success.data, title: action.payload }
        },
        changedTittle: action.payload
      });

    case actionType.ADD_UPDATE_TITLE:
      return Object.assign({}, state, {
        isEdit: false,
        updateted: action.payload
      });

    case actionType.ADD_UPDATE_TITLE_SUCCESSS:
      return Object.assign({}, state, { updateted_success: action.payload });

    case actionType.DELETE_POLL_OPTION:
      return Object.assign({}, state, { delete_option: action.payload });

    case actionType.DELETE_POLL_OPTION_REQUEST:
      return Object.assign({}, state, { isDeleteSuccess: false });

    case actionType.DELETE_POLL_OPTION_SUCCESS:
      return Object.assign({}, state, {
        delete_option_success: action.payload,
        isDeleteSuccess: true
      });

    case actionType.ADD_NEW_OPTION:
      return Object.assign({}, state, { isAddOption: action.payload });

    case actionType.TAKE_NEW_OPTION:
      return Object.assign({}, state, { newOption: action.payload });

    case actionType.SUBMIT_NEW_OPTION:
    return Object.assign({}, state, {isAddOption:false,submitNewOption:action.payload}); 

    case actionType.SUBMIT_NEW_OPTION_REQUEST:
    return Object.assign({}, state, {isAddOptionSuccess:false});

    case actionType.SUBMIT_NEW_OPTION_SUCCESS:
    return Object.assign({}, state, {isAddOptionSuccess:true,addOptionSuccess:action.payload});

    default:
      return state;
  }
};
