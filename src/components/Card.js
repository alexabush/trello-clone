import React, { Component } from 'react';
import { ListItems } from '../components';

class Card extends Component {
  state = {};
  render() {
    const listItemslis = this.props.items.map((itemName, idx) => {
      return <ListItems key={idx} itemName={itemName} />;
    });
    return (
      <div className="card">
        <h2 className="cardTitleText">{this.props.title}</h2>
        <ul>{listItemslis}</ul>
        <div>
          <p className="addCardText">Add a card...</p>
        </div>
      </div>
    );
  }
}

export default Card;
