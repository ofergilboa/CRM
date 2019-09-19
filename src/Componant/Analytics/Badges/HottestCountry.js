import React, { Component } from 'react'
import '../Badges/Badges.css'


class HottestCountry extends Component {
   render() {

      let countries = {}
      let countryNames = []
      let country
      let hottestCountry = ""
      let hottestCountryCount = 0
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
         for (let i = 0; i < countryNames.length; i++) {
            if (countries[countryNames[i]] > hottestCountryCount) {
               hottestCountryCount = countries[countryNames[i]]
               hottestCountry = countryNames[i]
            }
         }
      }
      return (
         <div className="Badges">
            Hottest Country: {hottestCountry}
         </div>)
   }
}
export default HottestCountry