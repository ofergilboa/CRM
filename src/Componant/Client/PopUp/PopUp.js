import React, { Component } from 'react'
import axios from 'axios'
import '../Client/Client.css'
let route = `http://localhost:8989/update/` // for local
// let route= `update/` //for heroku

class PopUp extends Component {
   constructor() {
      super()
      this.state = {
         client: "",
         name: "",
         country: ""
      }
   }

   updateState = (event) => {
      const target = event.target
      const value = target.value
      const key = target.name
      this.setState({
         ...this.state, [key]: value
      })
   }

   transferVal = async () => {
      this.props.changeShow()
      let clientC = { client: this.props.client.name, newV: this.state.country }
      let clientN = { client: this.props.client.name, newV: this.state.name }
      if (this.state.country) { await axios.post(`${route}country`, clientC) }
      if (this.state.name) { await axios.post(`${route}name`, clientN) }
      this.props.getAll()
   }
   hide = async () => {
      this.props.changeShow()
   }
   render() {
      console.log(this.state.name)
      return (
         <div>
            <div className="PopUp">
               <div>
                  name : <input className="inp" type="text" name="name" placeholder={this.props.client.name}
                     value={this.state.name} onChange={this.updateState} />
               </div>
               <div>
                  country : <input className="inp" type="text" name="country" placeholder={this.props.client.country}
                     value={this.state.country} onChange={this.updateState} />
               </div>
               <div>
                  <button className="inpB" onClick={this.transferVal}>update</button>
                  <button className="xButton" onClick={this.hide}>x</button>
               </div>
            </div>
         </div>)
   }
}
export default PopUp