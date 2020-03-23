import React, { Component } from 'react'
import '../Charts/Charts.css'
import TopEmployees from './TopEmployees'
import SalesByCountry from './SalesByCountry'
import SalesSince from './SalesSince'



class Charts extends Component {
   render() {
      return (
         <div id="charts">
            {/* Charts */}
            <TopEmployees/>
            <SalesByCountry />
            <SalesSince />
         </div>)
   }
}
export default Charts