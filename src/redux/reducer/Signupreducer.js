import * as actionType from '../action/actionType';

const initialState = {
    userDetail:[],
    userName:'',
    passWord:'',
    role:'',
    success:'',
    failed:''
}; 

export const Signupreducer = (state = initialState , action)=> {
    switch (action.type)
    {
        case actionType.SIGN_USERNAME :
        return Object.assign({},state ,{userName:action.payload});

        case actionType.SIGN_PASSWORD :
        return Object.assign({},state ,{passWord:action.payload})

        case actionType.SIGN_ROLE :
        return Object.assign({},state ,{role:action.payload})

        case actionType.SIGN_SUBMIT :
        return Object.assign({},state ,{ userName:'',passWord:'', role:'', userDetail:action.payload})

        case actionType.SIGN_SUBMIT_SUCCESS :
        return Object.assign({},state,{success:action.payload})

        default:
        return state;

    }
}
   