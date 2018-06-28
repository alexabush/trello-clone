import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Icon extends Component {
  state = {};
  render() {
    //should style as a boolean
    const hasBackground = this.props.hasBackground ? 'iconContainer' : '';
    return (
      <div className={hasBackground}>
        <FontAwesomeIcon
          className={this.props.iconClass}
          icon={this.props.iconType}
        />
      </div>
    );
  }
}

export default Icon;
