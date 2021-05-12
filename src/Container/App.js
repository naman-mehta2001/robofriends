import React, {Component} from 'react'
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox"
import "tachyons"
import "./App.css"
import axios from "axios"
import Scroll from "../Components/Scroll"

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchField : "",
            robots : [], //empty, call users using API call       
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            this.setState({robots : response.data})
        })
        // fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({robots : users}))
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
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else{return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox change={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )}
    }
}

export default App
