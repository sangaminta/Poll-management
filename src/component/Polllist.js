import React, { Component } from "react";
import "../style/Polllist.scss";
import { Link } from "react-router-dom";

export default class Polllist extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <Link
            to={"/login"}
            className="sign_out"
            onClick={this.props.handleSignOut}
          >
            Log out
          </Link>
          <Link to={"/addpoll"} className="text-white">
            Add Poll
          </Link>
        </nav>
        <div className="main head">
          <h3>Polls - List</h3>
          {this.props.pollsDetail.map((value, key) => (
            <div key={key}>

              <div className="poll_option_list">
                <div>
                  <span className="value_title"> {value.title} </span>
                  <span className="detail">
                    <Link to={`/viewdetail/${value._id}`}> View-Detail </Link>
                    <button className = 'btn btn-danger btn-sml' onClick = {()=>{this.props.pollDelete(value._id)} }> Delete </ button>
                  </span>
                </div>
                <br />
                <br />
                {value.options.map((option, key) => (
                  <div key={key} className="option">
                    <input type="radio" name="option" /> {option.option}
                  </div>
                ))}
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
