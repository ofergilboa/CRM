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

   
   componentDidMount = () => {
      this.addAllClients()
      this.getAllClients()
   }
   
   // a function that insert all of my clients into the DB, should run once
   addAllClients = () => {
      console.log(Clients)
      Clients.forEach(c => {
         axios.post(`/client` || `http://localhost:8989/client`, c)
      })
   }

   getAllClients = async () => {
      let res = await axios.get(`/clients`||`http://localhost:8989/clients`)
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
                  <Route exact path="/clients" render={() => <Clients clients={this.state.clients} getAll={this.getAllClients} />} />
                  <Route exact path="/actions" render={() => <Actions clients={this.state.clients} getAll={this.getAllClients} />} />
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

