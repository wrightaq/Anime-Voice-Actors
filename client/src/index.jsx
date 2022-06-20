import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Watched from './components/Watched.jsx';
import Character from './components/Character.jsx';
import Title from './components/Title.jsx';
import Actor from './components/Actor.jsx';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('app'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedView: false,
      characterView: false,
      actorView: false,
      titleView: false,
    }
    this.view = this.view.bind(this);
  }

 onMount() {

 }

  view() {
    var search = event.target.name
    this.setState({
      [event.target.name]: !this.state.search
    })
  }

  //create an add anime feature
  //create an onclick function that shows each component if clicked

  //find out way to change the components (need to change state back to false somehow)
  render() {
    return (
      <React.Fragment>
        <h1>Anime Voice Actor Tracker</h1>
        <h3>Add To Watched List:</h3>
        <input placeholder='Enter Title'></input>
        <button>Add</button>
        <button onClick={this.view} name='watchedView'>View Watched List</button>
        <div>
          <input placeholder='Search By Character' ></input>
          <button onClick={this.view} name='characterView'>Search</button>
          <input placeholder='Search By Voice Actor'></input>
          <button onClick={this.view} name='actorView'>Search</button>
          <input placeholder='Search By Anime Title'></input>
          <button onClick={this.view} name='titleView'>Search</button>
        </div>
        <div>
          {this.state.watchedView && !this.state.actorView && !this.state.titleView && !this.state.characterView? <Watched/> : null}
          {this.state.characterView && !this.state.actorView && !this.state.titleView && !this.state.watchedView  ? <Character/> : null}
          {this.state.actorView && !this.state.characterView && !this.state.titleView && !this.state.watchedView ? <Actor/> : null}
          {this.state.titleView && !this.state.actorView && !this.state.characterView && !this.state.watchedView ? <Title/> : null}
        </div>
      </React.Fragment>
    )
  }
}

root.render(<App/>);
