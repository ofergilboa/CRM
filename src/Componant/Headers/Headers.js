import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import './Headers.css'

class Headers extends Component {
   render() {
      return (
         <div className="Headers">
            <NavLink to="/clients" className="Header"> Clients </NavLink>
            <NavLink to="/actions" className="Header"> Actions </NavLink>
            <NavLink to="/analytics" className="Header" > Analytics </NavLink>
         </div>)
   }
}
export default Headers