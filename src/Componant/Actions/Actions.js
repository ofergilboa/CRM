import React, { Component } from 'react'
import InputC from './InputC/InputC';
import Update from './Update/Update';
import Add from './Add/Add';
import axios from 'axios'
import './Actions.css'


let route = `http://localhost:8989/` // for local
// let route= `/` //for heroku

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
      let clientVal = { client: this.state.client, newV: newVal.val }
      await axios.post(`${route}update/${newVal.key}`, clientVal)
      this.props.getAll()
   }

   render() {
      return (
         <div className="Actions">
            <InputC clients={this.props.clients} a={this.updateStateA} setClient={this.setClient} />
            {/* <br /> */}
            <Update clients={this.props.clients} getAll={this.props.getAll} transferVal={this.transferVal} />
            {/* <br /> */}
            <br/>

            <Add getAll={this.props.getAll} />
         </div>)
   }
}
export default Actions