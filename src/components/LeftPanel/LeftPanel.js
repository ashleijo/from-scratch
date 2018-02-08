import React, { Component } from 'react';
import '../../styles/LeftPanel.css';
import dummyData from '../../dummy-data';

const LeftPanel = (props) => {
  this.state = {
    posts: dummyData.slice(0,4),
  };

  const Deck = (props) => {
    return (
      <img className="s-thumbnail" src={props.thumbnailUrl} />
    );
  };

  return (
    <div className="left-panels">
    <div className="left-panel">
    <p className="nOfConnections">{dummyData.length}</p>
    <p className="your-connections"><b>Your Connections</b></p>
    <p className="see-all">See All</p>
{this.state.posts.map((post, i) => {
      return (
          <Deck key={i}  thumbnailUrl={post.thumbnailUrl} />
        );
      })}

    </div>
    <div className="left-panel-2">
    <p className="your-connections"><b>Add Personal Contacts</b></p>
    <form>
      <input type="text" placeholder="example@example.com" />
      <button className="continue-btn">Continue</button>
    </form>
    <p className="more-options">More Options</p>
    </div>
    <div className="left-panel-3">
    <p className="import-disclaim">We'll import your address book to suggest connections. We promise not import anything else. <b><a href="/no"><i>Pinky</i> promise.</a></b></p>
    </div>
    </div>
  );
};

export default LeftPanel;
