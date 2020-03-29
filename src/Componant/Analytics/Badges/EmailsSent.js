import React, { Component } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Badges/Badges.css'


class EmailsSent extends Component {
   render() {

      let emailsSent = 0
      let clientsN = this.props.clients.length

      this.props.clients.forEach(c => c.emailType ? emailsSent++ : null)

      let percent = 100 / clientsN * emailsSent
      percent = percent.toFixed(1)

      return (
         <div className="Badges">
            Emails sent
            <br />
            <br />
            <div className="badgeStats">
               <CircularProgressbar className="circle" value={emailsSent} maxValue={clientsN} text={`${emailsSent}`} />
               <div className="percent">
                  <div>{percent}% </div>
                  {/* <div >{emailsSent} clients</div> */}
               </div>
            </div>
         </div>)
   }
}
export default EmailsSent