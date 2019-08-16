import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
// @ts-check3


class Add extends Component {
   constructor() {moment().format("MMM Do YY")
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
      })
   }

   addClient = async () => {
      let newClient = {...this.state.client}
      newClient.firstContact= new Date()
      newClient.emailType = "-"
      newClient.sold =false
      await axios.post(`http://localhost:8989/client`, newClient)
      this.setState({
         client: {
            name: "",
            country: "",
            owner: "",
            email: ""
         }
      },function(){
         console.log(newClient)
         this.props.r()
      })
   }

   render() {
      return (
         <div>
            <div className="addClient">
               <div className="actionH">ADD CLIENT</div>
               <div>Name: {<input className="addInput" name="name" value={this.state.client.name} onChange={this.updateState} />}</div>
               <div>Country: {<input className="addInput" name="country" value={this.state.client.country} onChange={this.updateState} />}</div>
               <div>Owner: {<input className="addInput" name="owner" value={this.state.client.owner} onChange={this.updateState} />}</div>
               <div>Email: {<input className="addInput" name="email" value={this.state.client.email} onChange={this.updateState} />}</div>
               <button onClick={this.addClient}>Add New Client</button>
            </div>
         </div>)
   }
}
export default Add