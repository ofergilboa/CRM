import React, { Component } from 'react'
import '../Badges/Badges.css'


class EmailsSent extends Component {
   render() {

      let emailsSent = 0

      this.props.clients.forEach(c => c.emailType ? emailsSent++ : null)

      return (
         <div className="Badges">
            Emails Sent:  {emailsSent}
         </div>)
   }
}
export default EmailsSent