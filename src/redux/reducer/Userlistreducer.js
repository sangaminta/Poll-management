import * as actionType from '../action/actionType';

const initialState = {
    userDetail:[]
}

export const Userlistreducer = (state = initialState , action)=> {
    switch (action.type)
    {
        case actionType.RECEIVE_API_DATA :
        return Object.assign({},state ,{userDetail:action.payload.data});

        default:
        return state;
    }
} 