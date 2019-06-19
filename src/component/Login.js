import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Login.scss";
import { Link } from "react-router-dom";

export default class Login extends Component {
  componentDidUpdate() {
    if (localStorage.getItem("token")) this.props.history.push("/pollslist");
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <Link to={"/signup"} className="sign_up">
            Sign-Up
          </Link>
          /
          <Link to={"/login"} className="log_in">
            Log in
          </Link>
        </nav>

        <div className="main-page">
          <div className="col-md-6 login-form-2">
            <h3>Login for </h3>
            <form onSubmit={e => this.props.handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your User name *"
                  value={this.props.userName}
                  onChange={e => this.props.handleChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  value={this.props.passWord}
                  onChange={e => this.props.handlePassword(e)}
                />
              </div>
              <div className="form-group ">
                <input
                  type="submit"
                  className="btnSubmit btn-success "
                  value="Login"
                />
              </div>
              <div className="form-group">
                <div className="border border-danger bg-white">
                  {this.props.success === ""
                    ? ""
                    : this.props.success.error === 1
                    ? this.props.success.data
                    : ""}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
