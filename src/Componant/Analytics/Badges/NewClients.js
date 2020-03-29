import React, { Component } from 'react'
import moment from 'moment'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Badges/Badges.css'


class NewClients extends Component {
   render() {

      let newClients = 0
      let month = moment().format('MM')
      let monthShow = moment().format('MMMM')

      let year = moment().format('YYYY')

      let contact
      let yearClient
      let monthClient
      let clients = this.props.clients
      let clientsN = this.props.clients.length


      if (clients[0]) {
         for (let i = 0; i < clients.length; i++) {
            // console.log(i, this.props.clients[i].firstContact, this.props.clients[i].name)
            contact = this.props.clients[i].firstContact.split('-')
            monthClient = contact[1]
            yearClient = contact[0]
            // console.log(i, month, monthClient, year, yearClient)
            // console.log(i, month, monthClient, year, yearClient, this.props.clients[i].name)
            if (month === monthClient && year === yearClient) {
               newClients++
            }
         }
      }
      let percent = 100 / clientsN * newClients
      percent = percent.toFixed(1)

      return (
         <div className="Badges">
            New {monthShow} clients
            <br />
            <br />
            <div className="badgeStats">
               <CircularProgressbar className="circle" value={newClients} maxValue={clientsN} text={`${newClients}`} />
               <div className="percent">
                  <div>{percent}% </div>
               </div>
            </div>

         </div>)
   }
}
export default NewClients