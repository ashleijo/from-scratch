import React, { Component } from 'react';
import '../../styles/PendingConnections.css';

const PendingConnections = () => {
  return (
    <div className="a-box pending">
    No pending invitations<span className="manage-all"><a href="/no">Manage all</a></span>
    </div>
  );
};

export default PendingConnections;
