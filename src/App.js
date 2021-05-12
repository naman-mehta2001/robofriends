import React, {Component} from 'react'
import {robots} from "./Components/Robots"
import CardList from './Components/CardList';
import SearchBox from "./Components/SearchBox"
import "tachyons"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchField : "",
            robots : robots,       
        }
    }
    onSearchChange = (Event) => {
        this.setState({
            searchField : Event.target.value,
        })
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox change={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App
