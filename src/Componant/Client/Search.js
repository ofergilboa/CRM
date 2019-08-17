import React, { Component } from 'react'

class Search extends Component {
   constructor() {
      super()
      this.state = {
         filterBy: "",
         inputVal: ""
      }
   }

   updateState = (event) => {
      // this.props.updateState()
      const target = event.target
      const value = target.value
      const key = target.name
      this.setState({
        ...this.state, [key]: value
      })
   }

   render() {

      // let cl = []
      // this.props.c.forEach(c => cl.push(c[this.state.filterBy]))// this.props.c c[this.state.filterBy]
      // let filtered = new Set(cl)

      return (
         <div>

            <div className="Search" onChange={this.updateState}>
               <input list="filteredCategory" className="inpS" placeholder={this.state.filterBy} type="text" onInput={this.updateState}/>
               <datalist id="filteredCategory">
                  {this.props.c.map(c => <option value={c[this.state.filterBy]} ></option>)}
               </datalist>

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