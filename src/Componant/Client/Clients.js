import React, { Component } from 'react'
import Client from './Client';
import PopUp from './PopUp';
import Search from './Search';

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
      // console.log(this.state.filterBy || "12222")
      // console.log(this.state.inputVal || "22222")
      // console.log(this.props.clients || "32222")
      // console.log(this.props.clients[0] || "42222")
      // console.log(this.props.clients[0][name])
      console.log(this.state.filterBy)
      console.log(this.props.clients)



      return (
         <div className="Clients">
            <Search c={this.props.clients} updateState={this.updateState} />
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
               {this.state.show ? <PopUp c={this.state.client} r={this.props.r} changeShow={this.changeShow} /> : null}
               <tbody>
                  {!this.state.filterBy ? this.props.clients.map((c, i) => <Client changeShow={this.changeShow} c={c} key={i} />)
                     : this.props.clients.map((c, i) => c[this.state.filterBy].toLowerCase().includes(this.state.inputVal.toLowerCase()) ?
                        <Client changeShow={this.changeShow} c={c} key={i} /> : null)}
                  {/*regex:  this.state.inputVal.test(c[this.state.filterBy]) */}
               </tbody>

            </table>
         </div>)
   }
}
export default Clients

