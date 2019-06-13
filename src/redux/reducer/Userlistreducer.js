import * as actionType from '../action/actionType';

const initialState = {
    userDetail:[]
}

export const Userlistreducer = (state = initialState , action)=> {
    console.log(action.payload,'333333333333333');
    
    switch (action.type)
    {
        case actionType.RECEIVE_API_DATA :
        return Object.assign({},state ,{userDetail:action.payload.data});

        default:
        return state;
    }
}