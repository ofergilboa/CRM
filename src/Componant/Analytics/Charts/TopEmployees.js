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
         for (let i = 0; i < ownersNames.length; i++) {
            // console.log(keys[i])
            data.push({})
            data[i].owner = keys[i]
            data[i].clients = owners[keys[i]]
         }
         data.sort((a, b) => (a.clients > b.clients) ? -1 : 1)
         data.splice(5)
         // console.log(data)
      }
      return (

         <div id="TopEmployees">
            Top employees
            <ResponsiveContainer id="SalesByCountryChart" width="100%" height="90%">
               <BarChart
               layout="vertical"
                  width={500}
                  height={300}
                  data={data}
                  margin={{ top: 5, right: 30, left: 10, bottom: -5}}
               >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis type= "number" label={{ angle: 0}} interval={0} angle={0} tick={{ fontSize: 9, fontWeight: "bold" }} />
                  <YAxis dataKey="owner" type="category" tick={{ fontSize: 9, fontWeight: "bold" }} />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="clients" barSize={15} fill="#3e98c7" />
                  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
               </BarChart>
            </ResponsiveContainer>
         </div>)
   }
}
export default TopEmployees