import React, { Component } from 'react'
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

class SalesByCountry extends Component {

   constructor() {
      super()
      this.state = {
         category: "country"
      }
   }

   changeHandler = (event) => {
      console.log(event.target.value)
      this.setState({
         category: event.target.value
      })
      
   }

   render() {
      console.log(this.state.category)
      let item
      let data = []
      let categoryItems = {}
      let categoryItemsNames = []
      let clients = this.props.clients

      if (clients[0]) {
         for (let i = 0; i < clients.length; i++) {
            item = this.props.clients[i][this.state.category]
            if (categoryItems[this.state.category] === "-") { console.log(i) }
            if (categoryItems[item]) { categoryItems[item]++ }
            else {
               categoryItems[item] = 1
               categoryItemsNames.push(item)
            }
         }
         let keys = Object.keys(categoryItems)
         for (let i = 0; i < categoryItemsNames.length; i++) {
            data.push({})
            data[i][this.state.category] = keys[i]
            console.log(i, keys[i], data[i])
            data[i].count = categoryItems[keys[i]]
         }
         data.sort((a, b) => (a.count > b.count) ? -1 : 1)
         console.log(data)
      }

      return (
         <div id="SalesByCountry">
            {/* Sales by country */}
            <div id="sales-by-container">Sales By
                <select id="salesByButton" name="category" value={this.state.category} onChange={this.changeHandler}>
                  <option value="country">Country</option>
                  <option value="owner">Owner</option>
                  <option value="emailType">Email</option>
                  <option value="sold">Sold</option>
               </select>
            </div>
            <ResponsiveContainer id="SalesByCountryChart" width="100%" height="85%">
               <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                     top: 5, right: 30, left: 10, bottom: 5,
                  }}
               >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey={this.state.category} interval={0} angle={-15} tick={{ fontSize: 9, fontWeight: "bold", textAnchor: 'end' }} />
                  <YAxis tick={{ fontSize: 12, fontWeight: "bold" }} />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="count" fill="#3e98c7" />
                  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
               </BarChart>
            </ResponsiveContainer>
         </div>)
   }
}
export default SalesByCountry