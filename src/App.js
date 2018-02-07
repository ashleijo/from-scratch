import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import PersonContainer from './components/PersonContainer/PersonContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      newComment: '',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="flex-this">
          {this.state.posts.map((post, i) => {
            return (
                <PersonContainer key={i} fullname={post.fullname} thumbnailUrl={post.thumbnailUrl}
                 connections={post.connections} title={post.title}
                    comments={JSON.stringify(post.comments)} />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
