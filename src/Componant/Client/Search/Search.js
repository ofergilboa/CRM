import React, { Component } from 'react'

class Search extends Component {
   constructor() {
      super()
      this.state = {
         filterBy: "name",
         inputVal: ""
      }
   }

   updateState = (event) => {
      this.props.updateState(event)
      const target = event.target
      const value = target.value
      const key = target.name
      this.setState({
         ...this.state, [key]: value
      })
   }

   render() {
      return (
         <div>
            <div className="Search" onChange={this.updateState}>
               <input list="filteredCategory" name="inputVal" className="inpS"
                  placeholder={this.state.filterBy} type="text" onChange={this.updateState} />

               <select className="button" name="filterBy" value={this.state.filterBy} onChange={this.updateState}>
                  <option value="name">name</option>
                  <option value="owner">owner</option>
                  <option value="country">country</option>
                  <option value="sold">sold</option>
               </select>
            </div>
         </div>)
   }
}
export default Search