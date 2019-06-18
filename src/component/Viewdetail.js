import React, { Component } from "react";
import "../style/Singlepoll.scss";

export default class Viewdetail extends Component {
  render() {
    const title = this.props.data && this.props.data.title;

    return (
      <div>
        <h1>The Detail of id-:</h1>
        <button className="btn btn-danger btn-sml   ">Delete Poll</button>
        <div className="single_polllist">
          <div className="poll_title">
            {this.props && this.props.isEdit ? (
              <form onSubmit={e => this.props.updateEditText(e)}>
                <input
                  type="text"
                  value={title}
                  onChange={e =>
                    this.props.handleEditTitle(e.target.value, "title")
                  }
                />
              </form>
            ) : (
              title
            )}
            <button
              className="btn btn-success btn-sml float-right ml-4 "
              onClick={e => this.props.handleIsEdit(e)}
            >
              {this.props && this.props.isEdit ? "Update-title" : "Edit-title"}
            </button>
          </div>
          {this.props.data &&
            this.props.data.options.map((option, key) => (
              <div key={key} className="option_value ">
                <input
                  type="radio"
                  name="option"
                  onClick={() => this.props.handleChecked(option.option)}
                />
                {option.option}

                <button
                  className="btn btn-danger btn-sml float-right ml-4 "
                  onClick={e => this.props.handleDeleteOption(option.option)}
                >
                  Delete
                </button>
              </div>
            ))}

          <button
            className="do-votebutton"
            onClick={e => this.props.handleClick(e)}
          >
            Do-Vote
          </button>
        </div>
      </div>
    );
  }
}
