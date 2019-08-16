import React, { Component } from 'react'
import axios from 'axios'


class PopUp extends Component {
   constructor() {
      super()
      this.state = {
         client:"",
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
      let clientC = { client: this.props.c.name, newV: this.state.country }
      let clientN = { client: this.props.c.name, newV: this.state.name }
      axios.post(`http://localhost:8989/update/country`, clientC)
      await axios.post(`http://localhost:8989/update/name`, clientN)
      this.props.r()
   }


   render() {
      return (
         <div>
            <div className="PopUp">
               <div> name: <input type="text" name="name" placeholder={this.props.c.name} value={this.state.name} onInput={this.updateState} /> </div>
               <div> country: <input type="text" name="country" placeholder={this.props.c.country} value={this.state.country} onInput={this.updateState} /></div>
               <button className="inpB" onClick={this.transferVal}>update</button>
            </div>
         </div>)
   }
}
export default PopUp