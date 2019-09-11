import React, { Component } from 'react'
import moment from 'moment'
import './Client.css'

class Client extends Component {

   changeShow = () => {
      this.props.changeShow(this.props.client)
   }

   render() {
      return (
         <tr className="Client" onDoubleClick={this.changeShow}>
            <td className="ClientTD" > {this.props.client.name}</td>
            <td className="ClientTD"> {this.props.client.email}</td>
            <td className="ClientTD"> {this.props.client.country}</td>
            <td className="ClientTD2"> {this.props.client.emailType || "-"}</td>
            <td className="ClientTD2"> {this.props.client.sold ? "V" : "-"}</td>
            <td className="ClientTD"> {this.props.client.owner}</td>
            <td className="ClientTD"> {moment(this.props.client.firstContact).subtract(10, 'days').calendar()}</td>
         </tr>)
   }
}
export default Client


