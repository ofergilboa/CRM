import React, { Component } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

class TopEmployees extends Component {
   render() {

      let data = []
      let owners = {}
      let ownersNames = []
      let owner
      let clients = this.props.clients

      if (clients[0]) {
         for (let i = 0; i < clients.length; i++) {
            owner = this.props.clients[i].owner
            if (owners[owner]) { owners[owner]++ }
            else {
               owners[owner] = 1
               ownersNames.push(owner)
            }
         }
         let keys = Object.keys(owners)
         for (let i = 0; i < 5; i++) {
            console.log(keys[i])
            data.push({})
            data[i].owner = keys[i]
            data[i].count = owners[keys[i]]
         }
         console.log(data)
      }
      return (

         <div id="TopEmployees">
            Top employees
            <ResponsiveContainer id="SalesByCountryChart" width="100%" height="85%">
               <BarChart
                  layout="vertical"
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                     top: 5, right: 30, left: 10, bottom: 5,
                  }}
               >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="owner" label={{ angle: 0 }} interval={0} angle={-30} tick={{ fontSize: 9, fontWeight: "bold", textAnchor: 'end' }} />
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
export default TopEmployees