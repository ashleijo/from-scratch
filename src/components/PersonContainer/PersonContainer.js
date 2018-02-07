import React, { Component } from 'react';
import '../../styles/PersonContainer.css';

const PersonContainer = (props) => {
  return (
    <div className="person-container">
      <img className="thumbnail" src={props.thumbnailUrl} />
      <div className="fullname">{props.fullname}</div>
      <div className="title">{props.title} </div>
      <div className="connections">{props.connections} {props.connections === 1 ? 'connection' : 'connections'}</div>
      <button className="connect-button">Connect</button>
    </div>
  );
};

export default PersonContainer;
