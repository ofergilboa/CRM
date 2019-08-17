import React, { Component } from 'react'
import moment from 'moment'


class Client extends Component {
   
   changeShow = () => {
      this.props.changeShow(this.props.c)
   }

   render() {
      return (
         <tr className="Client" onDoubleClick={this.changeShow}>
            <td className="ClientTD" > {this.props.c.name}</td>
            <td className="ClientTD"> {this.props.c.email}</td>
            <td className="ClientTD"> {this.props.c.country}</td>
            <td className="ClientTD2"> {this.props.c.emailType|| "-"}</td>
            <td className="ClientTD2"> {this.props.c.sold? "V": "-"}</td>
            <td className="ClientTD"> {this.props.c.owner}</td>
            <td className="ClientTD"> {moment(this.props.c.firstContact).subtract(10, 'days').calendar()}</td>
         </tr>)
   }
}
export default Client


