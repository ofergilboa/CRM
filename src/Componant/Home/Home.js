import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import './Home.css'

class Home extends Component {
   render() {
      return (
         <div className="Home">
            {/* <img src="https://img.youtube.com/vi/-MKapbz0GIo/maxresdefault.jpg" alt=""/> */}
            Client Relationship Manager
            <br />
            <br />
            <div className="Home2">
               update and  keep track of your clients
             </div>
         </div >)
   }
}
export default Home