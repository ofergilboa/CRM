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

   // updateStateA = (event) => {
   //    const target = event.target
   //    const value = target.value
   //    const key = target.name
   //    if (key == "sale") { this.setState({ sale: true }, function () { console.log(this.state) }) }
   //    else if (key == "client") {
   //       this.setState({
   //          client: value,
   //          owner: "",
   //          email: "",
   //          sale: false,
   //       })
   //    } else {
   //       this.setState({
   //          ...this.state, [key]: value
   //       }, function () { console.log(this.state) })
   //    }
   // }

   setClient = (name) => {
      this.setState({ client: name })
   }

   transferVal = async (newVal) => {
      //put request to DB
      // console.log("2")
      let clientVal = { client: this.state.client, newV: newVal.val }
      // console.log(clientVal)
      await axios.post(`http://localhost:8989/update/${newVal.key}`, clientVal)
      this.props.r()
   }

   render() {
      return (
         <div className="Actions">
            <InputC clients={this.props.clients} a={this.updateStateA} setClient={this.setClient} />
            <br />
            <Update clients={this.props.clients} r={this.props.r} transferVal={this.transferVal} />
            <br />
            <Add r={this.props.r} />
         </div>)
   }
}
export default Actions