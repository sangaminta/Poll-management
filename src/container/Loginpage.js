import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../component/Login";
import {
  userlogin,
  passwordlogin,
  loginsubmit
} from "../redux/action/LoginAction";
import { connect } from "react-redux";

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentDidMount() {
    const value = localStorage.getItem("token");
    if (value) this.props.history.push("/pollslist");
  }

  handleChange(e) {
    const text = e.target.value;
    this.props.actionForloginusername(text);
  }

  handlePassword(e) {
    const pass = e.target.value;
    this.props.actionForloginpassword(pass);
  }

  notify = (msg) => toast(msg, { containerId: "A" });
  notifyA = () => toast('LogIn Successfully !', {containerId: 'A'});
  notifyB = () => toast('User-Invalid !', {containerId: 'B'});


  handleSubmit = e => {
    e.preventDefault();

    const userdetail = {
      username: this.props.userName,
      password: this.props.passWord
    };
    if (this.props.userName !== "" && this.props.passWord !== "") {
      this.props.actionforsubmit(userdetail);
    }
    if(this.props.success.error === 0)
    {
        this.notify('LogIn Successfully !')
    }
    else {
        this.notify('User-Invalid !')
    }
//    this.notify()
  };

  render() {
    return (
      <div>
        <Login
          {...this.props}
          handleChange={this.handleChange}
          handlePassword={this.handlePassword}
          handleSubmit={this.handleSubmit}
          notify = {this.notify}
        />
        <ToastContainer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("full state", state);

  return {
    userName: state.Loginreducer.userName,
    passWord: state.Loginreducer.passWord,
    success: state.Loginreducer.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionForloginusername: username => dispatch(userlogin(username)),
    actionForloginpassword: password => dispatch(passwordlogin(password)),
    actionforsubmit: data => dispatch(loginsubmit(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loginpage);
