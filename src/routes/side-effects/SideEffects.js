import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SideEffects.css';

class SideEffects extends React.Component {
  static propTypes = {
    SideEffects: PropTypes.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Side Effects</h1>
          <h2>Hello World</h2>
          <div>{JSON.stringify(this.props.SideEffects)}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SideEffects);
