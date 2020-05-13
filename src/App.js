import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/Card-list.component'
import { SearchBox } from './components/search-box/Search-box.component'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }
  
handleChange = (e)=>{
  this.setState({ searchField: e.target.value })
}


  render() {
    let { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
