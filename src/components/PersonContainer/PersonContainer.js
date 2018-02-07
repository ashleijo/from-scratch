import React, { Component } from 'react';
import '../../styles/PersonContainer.css';

const PersonContainer = (props) => {
  return (
    <div>
      <div>
        <div>
          <img className="thumbnail" src={props.thumbnailUrl} />
          <div className="fullname">{props.fullname}</div>
        </div>
        <div className="title">{props.title} </div>
        <div className="connections">{props.connections} {props.connections === 1 ? 'connection' : 'connections'}</div>
			</div>
    </div>
  );
};

export default PersonContainer;
