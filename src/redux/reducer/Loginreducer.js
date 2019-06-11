import * as actionType from '../action/actionType';

const initialState = {
    userDetail:[],
    userName:'',
    passWord:'',
    success:'',
    failed:''
}; 
   
export const Loginreducer = (state = initialState , action)=>{
    
    switch(action.type)
    {
        case actionType.FILL_USERNAME :
        return Object.assign({},state ,{userName:action.payload});

        case actionType.FILL_PASSWORD :
        return Object.assign({},state ,{passWord:action.payload})

        case actionType.LOG_SUBMIT :
        return Object.assign({},state ,{ passWord:'', userName:'', userDetail:action.payload})

        case actionType.LOG_SUBMIT_SUCCESS :
        return Object.assign({},state,{success:action.payload})

        case actionType.LOG_SUBMIT_FAILED :
        return Object.assign({},state,{failed:action.payload})

        default:
        return state;

    }
}