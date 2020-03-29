import React, { Component } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import '../Badges/Badges.css'


class HottestCountry extends Component {
   render() {

      let countries = {}
      let countryNames = []
      let country
      let hottestCountry = ""
      let hottestCountryCount = 0
      let clients = this.props.clients
      let clientsN = this.props.clients.length


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

      let percent = 100 / clientsN * hottestCountryCount
      percent = percent.toFixed(1)

      return (
         <div className="Badges">
            Hottest country
            <br />
            <br />
            <div className="badgeStats">
               <CircularProgressbar className="circle" value={hottestCountryCount} maxValue={clientsN} text={`${hottestCountry}`} />
               <div className="percent">
                  <div>{percent}% </div>
                  <div >{hottestCountryCount} clients</div>
               </div>
            </div>
         </div>)
   }
}
export default HottestCountry