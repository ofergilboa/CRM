import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Headers extends Component {
   render() {
      return (
         <div className="Headers">
            <Link to="/clients" className="Header"> Clients </Link>
            <Link to="/actions" className="Header"> Actions </Link>
            <Link to="/analytics" className="Header" > Analytics </Link>
         </div>)
   }
}
export default Headers