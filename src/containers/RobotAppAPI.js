import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary'; // error checker

class RobotApp extends Component {

    constructor() {
        super()
        this.state = {
            robots: [], // start with empty array 
            searchfield: '' //input box
        }
    }

    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users') // get api list
       .then(response => response.json()) // convert list into useable formart aka json
       //.then(users => {}); // emulate empty or long time loading list
       .then(users => {this.setState({ robots: users })}); // get users from api list/show users on search change
    }
 
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        }
 
    
    render() {
        const {robots, searchfield } = this.state; // decstructuring (removes repeating this.state)
        const filteredRobots = robots.filter(robot => { // filter robots state
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

    return (
            <>
                { !robots.length ? 
                    <div className='tc'>
                        <header>
                            <h1 className='f1 fw2 light-blue'>Loading...</h1>
                        </header>
                    </div>
                :
                    <div className='tc'>
                        <header>
                            <h1 className='f1 fw2 light-blue'>RoboFriends</h1>
                        </header>
                        <section>
                            <SearchBox searchChange={this.onSearchChange}/>
                            <ErrorBoundary>
                                <CardsList robots={filteredRobots} /> 
                            </ErrorBoundary>
                        </section>
                    </div>
                }
            </>
        )
    }
    
}

export default RobotApp;