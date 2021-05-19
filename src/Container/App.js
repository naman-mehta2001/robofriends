import React,{useState, useEffect} from 'react'
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox"
import "tachyons"
import "./App.css"
import axios from "axios"
import Scroll from "../Components/Scroll"
import ErrorBoundary from '../Components/ErrorBoundary';

function App() {
    const [searchField, setSearchField] = useState("")
    const [robots, setRobots] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {setRobots(res.data)})
    }, [robots])

    // fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({robots : users}))
    const onSearchChange = (Event) => {
        setSearchField(Event.target.value)
    }
    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (!(robots.length) ? <h1>Loading</h1> : (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox change={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        ))
}

export default App
