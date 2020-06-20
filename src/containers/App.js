import React,{Component} from 'react';
import './App.css'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
class App extends Component{
 
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
    }
    SearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchfield.toLowerCase()); })
     return !robots.length ?
      <h1>Loading</h1> :
      (
            <div className="tc"> {/* We can return only one parent so we return div*/}
                <h1 className="f1">Robofriends</h1>
                <SearchBox SearchChange={this.SearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;