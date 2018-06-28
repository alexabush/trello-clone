import React, { Component } from 'react';

class ListItems extends Component {
  state = {};
  render() {
    return (
      <div className="listItem">
        <p className="listItemText">{this.props.itemName}</p>
      </div>
    );
  }
}

export default ListItems;
