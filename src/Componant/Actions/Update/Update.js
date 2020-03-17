import React, { Component } from 'react'
import './Update.css'

class Update extends Component {
   constructor() {
      super()
      this.state = {
         owner: "",
         email: "",
         sale: false,
      }
   }

   updateState = (event) => {
      const target = event.target
      const value = target.value
      const key = target.name
      if (key == "sale") { this.setState({ sale: true }, function () { this.transferSale() }) }
      else {
         this.setState({
            ...this.state, [key]: value
         }, function () { console.log(this.state) })
      }
   }

   transferOwner = () => {
      let obj = { key: "owner", val: this.state.owner }
      this.props.transferVal(obj)
   }

   transferMail = () => {
      let obj = { key: "emailType", val: this.state.email }
      this.props.transferVal(obj)
   }

   transferSale = () => {
      let obj = { key: "sold", val: this.state.sale }
      this.props.transferVal(obj)
   }

   render() {

      let cl = []
      this.props.clients.forEach(c => cl.push(c.owner))
      let owners = new Set(cl)

      return (
         <div className="Update">
            <div className="owner">
               <div list="owners" placeholder="Owner" >Transfer Ownership To </div>
               <select className="select" placeholder="Owner" name="owner" value={this.state.owner} onChange={this.updateState} >
                  {[...owners].map(c => <option value={c}>{c} </option>)}
               </select> <button className="button" onClick={this.transferOwner}>TRANSFER</button>
            </div>

            <span className="email" value={this.state.email} onChange={this.updateState}>
               <div>Send Email </div>
               <select className="select" name="email">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
               </select> <button className="button" onClick={this.transferMail}>SEND</button>
            </span>

            <span className="sale" value={this.state.sale} onChange={this.updateState}>
               <div>Declare sale!  </div><button className="button" name="sale" onClick={this.updateState} >DECLARE</button>
            </span>

         </div >)
   }
}
export default Update
