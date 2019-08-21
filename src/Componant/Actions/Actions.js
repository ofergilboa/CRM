import React, { Component } from 'react'
import InputC from './InputC';
import Update from './Update';
import Add from './Add';
import axios from 'axios'

class Actions extends Component {
   constructor() {
      super()
      this.state = {
         client: "",
         owner: "",
         email: "",
         sale: false,
      }
   }

   setClient = (name) => {
      this.setState({ client: name })
   }

   transferVal = async (newVal) => {
      //put request to DB
      // console.log("2")
      let clientVal = { client: this.state.client, newV: newVal.val }
      // console.log(clientVal)
      await axios.post(`http://localhost:8989/update/${newVal.key}`, clientVal)
      this.props.getAll()
   }

   render() {
      return (
         <div className="Actions">
            <InputC clients={this.props.clients} a={this.updateStateA} setClient={this.setClient} />
            <br />
            <Update clients={this.props.clients} getAll={this.props.getAll} transferVal={this.transferVal} />
            <br />
            <Add getAll={this.props.getAll} />
         </div>)
   }
}
export default Actions