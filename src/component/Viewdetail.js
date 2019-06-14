import React, { Component } from 'react'
import '../style/Singlepoll.scss'

export default class Viewdetail extends Component {

    render() {
        
        return (
            <div>
                <h1>The Detail of id-:</h1>
                <div className = 'single_polllist'>
                    <div className ='poll_title'>{this.props.data && this.props.data.title}</div>
                                {this.props.data && this.props.data.options.map((option,key)=>
                                 <div key ={key} className ='option_value'>
                                      <input type="radio" /> { option.option } 
                                </div>
                                )}
                    </div>
            </div>
        )
    }
}
