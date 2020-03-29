import React, { Component } from 'react'



class ClientCount extends Component {
   render() {
      let clients = this.props.clients.length
      let goal = 2500

      return (
         <div id="ClientCount">
            Target: {clients}/{goal} clients
            <hr id="hr1" />
            <hr id="hr2" style={{ width: 100/goal*clients*0.85 + `%` }} />
         </div>)
   }
}
export default ClientCount