import React, { Component } from 'react'
import '../Charts/Charts.css'
import TopEmployees from './TopEmployees'
import SalesByCountry from './SalesByCountry'
import ClientCount from './ClientCount'



class Charts extends Component {
   render() {
      return (
         <div id="charts">
            {/* Charts */}
            <TopEmployees clients={this.props.clients}/>
            <SalesByCountry clients={this.props.clients}/>
            <ClientCount clients={this.props.clients}/>
         </div>)
   }
}
export default Charts