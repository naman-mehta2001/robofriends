import React,{useEffect} from 'react'
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox"
import "tachyons"
import "./App.css"
import Scroll from "../Components/Scroll"
import ErrorBoundary from '../Components/ErrorBoundary';
import {connect} from "react-redux"
import {setSearchField} from "../redux/searfield/action"
import {fetchUsers} from "../redux/user/userActions"

function App(props) {

    useEffect(() => {
        props.fetchUsers()
        // eslint-disable-next-line
    }, [])

    // fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({robots : users}))
    const filteredRobots = props.users.filter(robot => {
            return robot.name.toLowerCase().includes(props.searchField.toLowerCase())
        })
        return (props.loading ? <h1>Loading</h1> : (
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
    return {searchField : state.searchField.searchField,
            users : state.user.users,
            loading : state.user.loading,
            error : state.user.error
    }
}
const mapDispatchToProps = dispatch => {
    return {onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    fetchUsers : () => dispatch(fetchUsers())}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
