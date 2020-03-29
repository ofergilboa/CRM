import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import './Add.css'
let route = 'http://localhost:8989/' // for local
// let route= '/'  //for heroku

class Add extends Component {
   constructor() {
      moment().format("MMM Do YY")
      super()
      this.state = {
         client: {
            name: "",
            country: "",
            owner: "",
            email: "",
         }
      }
   }

   updateState = (event) => {
      const target = event.target
      const value = target.value
      const key = target.name

      this.setState({
         client: { ...this.state.client, [key]: value }
      }, function () { console.log(this.state.client) })
   }

   addClient = async () => {
      let newClient = { ...this.state.client }
      newClient.firstContact = new Date()
      newClient.emailType = "-"
      newClient.sold = false
      console.log(newClient)
      await axios.post(`${route}client`, newClient)
      this.setState({
         client: {
            name: "",
            country: "",
            owner: "",
            email: ""
         }
      }, function () {
         console.log(1)
         console.log(newClient)
         this.props.getAll()
      })
   }

   render() {
      let client = this.state.client
      return (
         <div>
            <div >
               <div className="center">Add Client</div>
               <br />
               <div>Name <div>{<input className="inpS" name="name" value={client.name} onChange={this.updateState} />}</div></div>
               <div>Country <div>{<input className="inpS" name="country" value={client.country} onChange={this.updateState} />}</div></div>
               <div>Owner <div>{<input className="inpS" name="owner" value={client.owner} onChange={this.updateState} />}</div></div>
               <div>Email <div>{<input className="inpS" name="email" value={client.email} onChange={this.updateState} />}</div></div>
               <br />
               <button className="button buttonAdd" onClick={this.addClient}>ADD NEW CLIENT</button>
            </div>
         </div>)
   }
}
export default Add