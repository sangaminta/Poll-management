import * as actionType from '../action/actionType';

const initialState = {
    success:'',
    id:''
}

export const Pollidreducer = (state = initialState , action)=> {
    switch (action.type)
    {
        case actionType.POLL_SET_ID :
        return Object.assign({},state ,{id:action.payload});

        case actionType.POLL_ID_RECEIVE_API_DATA :
        return Object.assign({},state ,{success:action.payload});

        default:
        return state;
    }
}