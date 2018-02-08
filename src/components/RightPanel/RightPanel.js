import React, { Component } from 'react';
import '../../styles/RightPanel.css';
import dummyData from '../../dummy-ad-data';

const RightPanel = () => {
  this.state = {
    posts: dummyData.slice(0,3),
  };

  const Deck = (props) => {
    return (
      <div className="flex-right">
      <img className="ad-thumbnail" src={props.thumbnailUrl} />
      <div className="head-1"><b>{props.title}</b>

      <div className="head-2">{props.fullname}</div></div>
      </div>
    );
  };



  return (
    <div className="right-panel">
    <p className="first-line"><span className="promoted">Promoted</span> <span className="dotdotdot">…</span></p>
    <div className="holds-ads">
    {this.state.posts.map((post, i) => {
          return (

              <Deck key={i}  thumbnailUrl={post.thumbnailUrl} title={post.title} fullname={post.fullname}/>

            );
          })}
          </div>
    </div>
  );
};

export default RightPanel;
