import React, { Component } from 'react'
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

class SalesByCountry extends Component {

   render() {

      let data = []
      let countries = {}
      let countryNames = []
      let country
      let clients = this.props.clients

      if (clients[0]) {
         for (let i = 0; i < clients.length; i++) {
            country = this.props.clients[i].country
            if (countries[country]) { countries[country]++ }
            else {
               countries[country] = 1
               countryNames.push(country)
            }
         }
         let keys = Object.keys(countries)
         for (let i = 0; i < countryNames.length; i++) {
            console.log(keys[i])
            data.push({})
            data[i].country = keys[i]
            data[i].count = countries[keys[i]]
            data.sort((a, b) => (a.count > b.count) ? -1 : 1)

         }
         console.log(data)
      }

      return (
         <div id="SalesByCountry">
            Sales by country
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
                  <XAxis dataKey="country" interval={0} angle={-30} tick={{fontSize: 9, fontWeight:"bold", textAnchor: 'end'}} />
                  <YAxis tick={{fontSize: 12, fontWeight:"bold"}}/>
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