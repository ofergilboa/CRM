import React, { Component } from 'react'
import Client from '../Client/Client';
import PopUp from '../PopUp/PopUp';
import Search from '../Search/Search';
import './Clients.css'

class Clients extends Component {
   constructor() {
      super()
      this.state = {
         filterBy: "name",
         inputVal: "",
         show: false,
         client: {},
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

   changeShow = (client) => {
      this.setState({ show: !this.state.show, client })
   }

   render() {
      return (
         <div className="Clients">
            <Search c={this.props.clients} updateState={this.updateState} />
            <table className="Clients">
               <thead>
                  <tr className="Client" >
                     <th className="ClientTH">Name</th>
                     <th className="ClientTH">Email</th>
                     <th className="ClientTH">Country</th>
                     <th className="ClientTH2">Email type</th>
                     <th className="ClientTH2">Sold</th>
                     <th className="ClientTH">Owner</th>
                     <th className="ClientTH">First contact</th>
                  </tr>
               </thead>
               {this.state.show
                  ? <PopUp client={this.state.client} getAll={this.props.getAll} changeShow={this.changeShow} />
                  : null}
               <tbody>
                  {!this.state.filterBy
                     ? this.props.clients.map((c, i) => <Client changeShow={this.changeShow} client={c} key={i} />)
                     : this.props.clients.map((c, i) =>
                        c[this.state.filterBy].toLowerCase().includes(this.state.inputVal.toLowerCase())
                           ? <Client changeShow={this.changeShow} client={c} key={i} />
                           : null)}
               </tbody>
            </table>
         </div>)
   }
}
export default Clients

