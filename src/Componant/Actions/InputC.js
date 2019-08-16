import React, { Component } from 'react'

class InputC extends Component {
   constructor() {
      super()
      this.state = {
         client: "",
      }
   }

   updateState = (event) => {
      const target = event.target
      const value = target.value
      this.setState({
         client: value
      }, function () { 
         console.log(this.state)
         this.setClientI() 
      })
   }

   setClientI = () => {
      this.props.setClient(this.state.client)
   }

   render() {
      return (
         <div className="InputC">
            <div> UPDATE </div>

            <div>Client: {<input list="clients" name="client" className="addInput" value={this.state.client} onInput={this.updateState} />}
               <datalist id="clients">
                  {this.props.clients.map(c => <option value={c.name} ></option>)}
               </datalist>
            </div>

         </div >)
   }
}
export default InputC