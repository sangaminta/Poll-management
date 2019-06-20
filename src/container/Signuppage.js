import React, { Component } from "react";
import Signup from "../component/Signup";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signUpUser,
  signUpPassword,
  signUpRole,
  signUpSubmit,
  setError
} from "../redux/action/LoginAction";
class Signuppage extends Component {
    componentDidUpdate() {
        console.log('jjjjjjjjjjjjj',this.props.success.error);
        
        if(this.props.success && (this.props.success.error === 0 || this.props.success.error === 1))
        {
            if (this.props.success.error === 0) {
                this.notify("Account created..");
              } else {
                this.notify("Account already exist..");
              }
        }
        setTimeout(()=>{
            if(this.props.success.error === 0)this.props.history.push("/login")
        },4000)
         
    }
  componentWillUnmount() {
    this.props.actionForResetErrorValue();
  }

  notify = (msg) => toast(msg, { containerId: "A" });

  handleUserName = e => {
    const text = e.target.value;
    this.props.actionForsignuUsername(text);
  };

  handlePassword = e => {
    const passWord = e.target.value;
    this.props.actionForsignuPassword(passWord);
  };

  handleRole = e => {
    const text = e.target.value;
    this.props.actionForsignupRole(text);
  };

  handleSubmit = e => {
    e.preventDefault();
    const userdetail = {
      userName: this.props.userName,
      passWord: this.props.passWord,
      role: this.props.role
    };
    this.props.actionSignupSumit(userdetail);
    // if (this.props.success.error === 0) {
    //   this.notify("sdgyf");
    // } else {
    //   this.notify("iryti");
    // }
  };
  render() {
    return (
      <div>
        <Signup
          {...this.props}
          handleUserName={this.handleUserName}
          handlePassword={this.handlePassword}
          handleRole={this.handleRole}
          handleSubmit={this.handleSubmit}
        />
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("full state-signup", state);
  return {
    userName: state.Signupreducer.userName,
    passWord: state.Signupreducer.passWord,
    role: state.Signupreducer.role,
    success: state.Signupreducer.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionForsignuUsername: username => dispatch(signUpUser(username)),
    actionForsignuPassword: password => dispatch(signUpPassword(password)),
    actionForsignupRole: role => dispatch(signUpRole(role)),
    actionSignupSumit: value => dispatch(signUpSubmit(value)),
    actionForResetErrorValue: () => dispatch(setError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signuppage);
