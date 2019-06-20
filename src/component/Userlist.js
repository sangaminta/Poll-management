import React, { Component } from 'react'

export default class Userlist extends Component {
    
    render() {
        return (

            
                <table className="table">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                
                    {this.props.userDetail.map((value,key) => 
                        <tr key = {key}>
                            <td>{value.username}</td>
                            <td>{value.password}</td>
                            <td>{value.role}</td>
                        </tr>
                    )} 
                    </tbody>
                </table>  
        )
    }
}
