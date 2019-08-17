import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Headers from './Componant/Headers';
import Clients from './Componant/Client/Clients';
import Actions from './Componant/Actions/Actions';
// import clients from './data'; //for loading clients to db


class App extends Component {
   constructor() {
      super()
      this.state = { clients: [] }
   }


   // addedAllClients = () => {
   //    console.log(clients)
   //    clients.forEach(c => {
   //       axios.post(`http://localhost:8989/client`, c)
   //    })
   // }

   componentDidMount = () => {
      // this.addedAllClients()
      this.getAllClients()
   }


   getAllClients = async () => {
      let res = await axios.get(`http://localhost:8989/clients`)
      const clients = res.data
      this.setState({ clients })
   }

   render() {
      console.log(this.state)
      return (
         <Router>
            <div className="App">
               <header className="App-header">
                  <div className="Headers">
                     <Headers />
                  </div>
               </header>
               <body className="App-body">
                  <Route exact path="/clients" render={() => <Clients clients={this.state.clients} r={this.getAllClients} />} />
                  <Route exact path="/actions" render={() => <Actions clients={this.state.clients} r={this.getAllClients} />} />
                  {/* <Route exact path="/analytics" component={Analytics}/> */}
               </body>
               <footer className="App-footer">

               </footer>
            </div>
         </Router>
      )
   }
}

export default App;

