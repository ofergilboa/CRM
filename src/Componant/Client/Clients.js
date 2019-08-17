import React, { Component } from 'react'
import Client from './Client';
import PopUp from './PopUp';
import Search from './Search';

class Clients extends Component {
   constructor() {
      super()
      this.state = {
         // filterBy: "country",
         // inputVal: "croatia",
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
      console.log(this.state.filterBy)
      console.log(this.state.inputVal)
      console.log(this.props.clients)
      // console.log(this.props.clients[0][this.state.filterBy])


      return (
         <div className="Clients">
            <Search c={this.props.clients} />
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
                  {this.props.clients.map((c, i) => <Client  changeShow={this.changeShow} c={c} key={i} />)}
                  {/* {this.props.clients.map((c, i) => c[this.state.filterBy] === this.state.inputVal ? <Client changeShow={this.changeShow} c={c} key={i} /> : null)} */}

               </tbody>

            </table>
         </div>)
   }
}
export default Clients

