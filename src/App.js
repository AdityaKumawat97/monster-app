import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/Card-list.component'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }



  render() {
    let { monsters,searchField } = this.state
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <input type='search' 
        placeholder='search monsters' 
        onChange={e => { 
          this.setState({searchField: e.target.value})}
          } />
        {/* {console.log(this.state)} */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
