import React, { Component } from 'react'
import moment from 'moment'
import '../Badges/Badges.css'


class NewClients extends Component {
   render() {

      let newClients = 0
      let month = moment().format('MM')
      let monthShow = moment().format('MMMM')

      let year = moment().format('YY')
      console.log(moment())

      let contact
      let yearClient
      let monthClient
      let clients = this.props.clients

      if (clients[0]) {
         for (let i = 0; i < clients.length; i++) {
            // console.log(i, this.props.clients[i].firstContact, this.props.clients[i].name)
            contact = this.props.clients[i].firstContact.split('-')
            monthClient = contact[1]
            yearClient = contact[0].split(0)
            yearClient = yearClient[1]
            // console.log(i, month, monthClient, year, yearClient)
            if (month === monthClient && year === yearClient) {
               newClients++
               console.log(i, month, monthClient, year, yearClient, this.props.clients[i].name)
            }
         }
      }

      return (
         <div className="Badges">
            New {monthShow} Clients: {newClients}

         </div>)
   }
}
export default NewClients