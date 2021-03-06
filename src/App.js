import React, { Component } from 'react';
import './styles/App.css';
import LeftPanel from './components/LeftPanel/LeftPanel';
import PendingConnections from './components/PendingConnections/PendingConnections';
import PersonContainer from './components/PersonContainer/PersonContainer';
import RightPanel from './components/RightPanel/RightPanel';
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
        <div className="first-v"><u>Need a fake advertisment to take up space on the screen?? - Well, here's a nice line for you. </u><span className="yw">You're welcome!</span><sup>&nbsp;&nbsp;&nbsp; Ad<span className="dotdotdot-1">&nbsp;&nbsp;<sup>…</sup></span></sup></div>
        <div className="everything">
        <LeftPanel />
        <div className="flex-this">
        <PendingConnections />
        <div className="pymk-containers">
        <div className="a-box pymk">People you may know</div>
          {this.state.posts.map((post, i) => {
            return (
                <PersonContainer key={i} fullname={post.fullname} thumbnailUrl={post.thumbnailUrl}
                 connections={post.connections} title={post.title}
                    comments={JSON.stringify(post.comments)} />
              );
            })}
          </div>
        </div>
        <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
