import React, { Component } from "react";
import "../style/Singlepoll.scss";

export default class Viewdetail extends Component {
  render() {
    return (
      <div>
        <h1>The Detail of id-:</h1>
        <div className="single_polllist">
          <div className="poll_title">
            {this.props.data && this.props.data.title}
            <button className="btn-success"> Edit</button>
            <button className="btn-danger "> Delete</button>
          </div>
          {this.props.data &&
            this.props.data.options.map((option, key) => (
              <div key={key} className="option_value">
                <input
                  type="radio"
                  name="option"
                  onClick={() => this.props.handleChecked(option.option)}
                />{" "}
                {option.option}
              </div>
            ))}
          <button
            className="btn-success mb-4"
            onClick={e => this.props.handleClick(e)}
          >
            Do-Vote
          </button>
        </div>
      </div>
    );
  }
}
