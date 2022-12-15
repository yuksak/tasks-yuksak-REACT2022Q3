import React, { Component } from 'react';
import classes from './index.module.scss';

class NotFound extends Component {
  render() {
    return (
      <div className={classes.notFound}>
        <h2>404. That’s an error.</h2>
        <p>
          The requested URL was not found on this server.
          <br />
          That’s all we know.
        </p>
      </div>
    );
  }
}

export default NotFound;
