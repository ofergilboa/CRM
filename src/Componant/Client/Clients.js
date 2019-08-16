import React, { Component } from 'react'
import Client from './Client';
import PopUp from './PopUp';

class Clients extends Component {
   constructor() {
      super()
      this.state = {
         show: false,
         client:{}
      }
   }
   changeShow = (client) => {
      this.setState({ show: !this.state.show, client })
   }

   render() {
      return (
         <div className="Clients">
            <table className="Clients">
               <thead>
                  <tr className="Client" >
                     <th className="ClientTH">name</th>
                     <th className="ClientTH">email</th>
                     <th className="ClientTH">country</th>
                     <th className="ClientTH2">emailType</th>
                     <th className="ClientTH2">sold</th>
                     <th className="ClientTH">owner</th>
                     <th className="ClientTH">first Contact</th>
                  </tr>
               </thead>
               {this.state.show ? <PopUp c={this.state.client} r={this.props.r} changeShow={this.changeShow}/> : null}
               <tbody>
                  {this.props.clients.map((c, i) => <Client  changeShow={this.changeShow} c={c} key={i} />)}
               </tbody>

            </table>
         </div>)
   }
}
export default Clients

