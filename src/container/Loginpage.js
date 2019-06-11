import React, { Component } from 'react';
import Login from '../component/Login';
import{ userlogin , passwordlogin , loginsubmit} from '../redux/action/LoginAction';
import { connect } from 'react-redux';
class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const text = e.target.value
        this.props.actionForloginusername(text)
    }

    handlePassword(e){
        const pass = e.target.value
        this.props.actionForloginpassword(pass)
    }
    
    handleSubmit(e){
        e.preventDefault();
        
        const userdetail = {
            username:this.props.userName,
            password:this.props.passWord
        }
    
        this.props.actionforsubmit(userdetail);
    }

    render()
     {
        
        return (    
           <Login {...this.props}  handleChange={this.handleChange} handlePassword ={this.handlePassword} handleSubmit = {this.handleSubmit}/>
        )
    }
}
const mapStateToProps = (state) =>{   
    console.log('full state',state);
     
    return{
        userName: state.Loginreducer.userName,
        passWord: state.Loginreducer.passWord,
        success: state.Loginreducer.success
        
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        actionForloginusername:(username) => dispatch(userlogin(username)),
        actionForloginpassword:(password) => dispatch(passwordlogin(password)),
        actionforsubmit:(data) => dispatch(loginsubmit(data))


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);

