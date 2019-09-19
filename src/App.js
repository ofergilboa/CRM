import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Headers from './Componant/Headers/Headers';
import Clients from './Componant/Client/Clients/Clients';
import Actions from './Componant/Actions/Actions';
import Analytics from './Componant/Analytics/Analytics';
// import clients from './data'; //for loading clients to db
let route = `http://localhost:8989/` // for local
// let route= `/` //for heroku

class App extends Component {
   constructor() {
      super()
      this.state = { clients: [] }
   }


   componentDidMount = () => {
      // this.addAllClients()
      this.getAllClients()
   }

   //// a function that inserted all of my clients into the DB, should run once
   // addAllClients = () => {
   //    console.log(clients)
   //    clients.forEach(c => {
   //       axios.post(`${route}clients`, c)
   //    })
   // }

   getAllClients = async () => {
      let res = await axios.get(`${route}clients`)
      const clients = res.data
      console.log(clients)
      this.setState({ clients })
   }

   render() {
      return (
         <Router>
            <div className="App">
               <header className="App-header">
                  <div>
                     <Headers />
                  </div>
               </header>
               <body className="App-body">
                  <Route exact path="/" render={() => <Clients clients={this.state.clients} getAll={this.getAllClients} />} />
                  <Route exact path="/clients" render={() => <Clients clients={this.state.clients} getAll={this.getAllClients} />} />
                  <Route exact path="/actions" render={() => <Actions clients={this.state.clients} getAll={this.getAllClients} />} />
                  <Route exact path="/analytics" render={() => <Analytics clients={this.state.clients} />} />
               </body>
               <footer className="App-footer">

               </footer>
            </div>
         </Router>
      )
   }
}

export default App;

