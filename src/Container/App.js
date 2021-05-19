import React,{useState, useEffect} from 'react'
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox"
import "tachyons"
import "./App.css"
import axios from "axios"
import Scroll from "../Components/Scroll"
import ErrorBoundary from '../Components/ErrorBoundary';
import {connect} from "react-redux"
import {setSearchField} from "../redux/searfield/action"

function App(props) {
    const [robots, setRobots] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {setRobots(res.data)})
    }, [robots])

    // fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({robots : users}))
    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(props.searchField.toLowerCase())
        })
        return (!(robots.length) ? <h1>Loading</h1> : (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox change={props.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        ))
}
const mapStateToProps = state => {
    return {searchField : state.searchField}
}
const mapDispatchToProps = dispatch => {
    return {onSearchChange : (event) => dispatch(setSearchField(event.target.value))}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
