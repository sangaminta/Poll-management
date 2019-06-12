import React, { Component } from 'react'
import Signup from '../component/Signup'
import { connect } from 'react-redux';
import { signupuser, signuppassword, signuprole, signupsubmit } from '../redux/action/LoginAction';
class Signuppage extends Component {
    constructor(props){
        super(props)
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleRole = this.handleRole.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserName(e) {
        const text = e.target.value;
        this.props.actionForsignuUsername(text);
    }

    handlePassword(e) {
        const pass = e.target.value;
        this.props.actionForsignuPassword(pass);
    }

    handleRole(e) {
        const text = e.target.value;
        this.props.actionForsignupRole(text);
    }

    handleSubmit(e) {
        e.preventDefault();
        const userdetail = {
            username:this.props.userName,
            password:this.props.passWord,
            role:this.props.role,
        }
        this.props.actionSignupSumit(userdetail);
    }
    render() {
        return (
            <div>
                <Signup {...this.props}  handleUserName={this.handleUserName} handlePassword ={this.handlePassword} handleRole ={this.handleRole} handleSubmit = {this.handleSubmit}/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('full state-signup',state);
    return {
        userName:state.Signupreducer.userName,
        passWord:state.Signupreducer.passWord,
        role:state.Signupreducer.role,
        success: state.Signupreducer.success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionForsignuUsername:(username) => dispatch(signupuser(username)),
        actionForsignuPassword:(password) => dispatch(signuppassword(password)),
        actionForsignupRole:(role) => dispatch(signuprole(role)),
        actionSignupSumit:(value) => dispatch(signupsubmit(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signuppage);
