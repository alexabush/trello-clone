import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Icon extends Component {
  state = {};
  render() {
    const hasBackground = this.props.hasBackground ? 'iconContainer' : '';
    return (
      <div className={hasBackground} onClick={this.props.onClick}>
        <FontAwesomeIcon
          className={this.props.iconClass}
          icon={this.props.iconType}
          size={this.props.size}
        />
      </div>
    );
  }
}

export default Icon;
