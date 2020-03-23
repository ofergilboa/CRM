import React, { Component } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Badges/Badges.css'


class EmailsSent extends Component {
   render() {

      let emailsSent = 0
      let clientsN = this.props.clients.length

      this.props.clients.forEach(c => c.emailType ? emailsSent++ : null)

      return (
         <div className="Badges">
            Emails Sent
            <br />
            <br />

            <CircularProgressbar className="circle" value={emailsSent} maxValue={clientsN} text={`${emailsSent}`} />

         </div>)
   }
}
export default EmailsSent