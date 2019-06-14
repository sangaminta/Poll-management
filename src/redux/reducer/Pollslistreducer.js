import * as actionType from '../action/actionType';

const initialState = {
    pollsDetail:[]
}

export const Pollslistreducer = (state = initialState , action)=> {
    switch (action.type)
    {
        case actionType.POLLS_RECEIVE_API_DATA :
        return Object.assign({},state ,{pollsDetail:action.payload.data});

        default:
        return state;
    }
}