import * as actionType from '../action/actionType';

const initialState = {
    pollDetail:{},
    success:''
}; 

export const Addpollreducer = (state = initialState , action)=> {
    
    switch (action.type) {
        case actionType.ADD_POLL_TITLE :
        return Object.assign({},state ,{[action.payload.name]:action.payload.text})

        case actionType.SUBMIT_POLL :
        return Object.assign({},state,{option1:'',option2:'',option3:'',option4:'',pollTitle:'',pollDetail:action.payload})

        case actionType.SUBMIT_POLL_SUCCESS :

        return Object.assign({}, state ,{success:action.payload})

        default:
        return state;
    }
}
