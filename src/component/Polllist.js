import React, { Component } from 'react'
import '../style/Polllist.scss';

export default class Polllist extends Component {
    render() {
        return (
            <div>
                <h3>Polls - List</h3>
                {this.props.pollsDetail.map((value,key)=>
                <div key = {key}>
                <div  className='poll_option_list'>
                  <div className = 'value_title'> {value.title} </div> <br /><br />

                  {value.options.map((option,key)=>
                  <div key ={key} className ='option'>
                     <input type="radio" /> { option.option } 
                  </div>
                    )}
                  
                  
                 </div>
                 
                     <hr className  />
                 </div>
                 
                    )}
                    
            </div>
        )
    }
}
