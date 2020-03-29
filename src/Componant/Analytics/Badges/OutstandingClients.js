import React, { Component } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Badges/Badges.css'


class OutstandingClients extends Component {
   render() {

      let notSold = 0
      let clients = this.props.clients.length
      this.props.clients.forEach(c => !c.sold ? notSold++ : null)
      let percent = 100 / clients * notSold
      percent = percent.toFixed(1)


      return (
         <div className="Badges">
            Outstanding clients
            <br />
            <br />
            <div className="badgeStats">
               <CircularProgressbar className="circle" value={notSold} maxValue={clients} text={`${notSold}`} />
               <div className="percent">
                  <div>{percent}% </div>
               </div>
            </div>

         </div>)
   }
}
export default OutstandingClients