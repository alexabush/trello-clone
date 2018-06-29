import React, { Component } from 'react';
import { ListItems } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../components/Icon';

class Card extends Component {
  state = {
    isShowNewItemForm: true
  };

  toggleShowNewItemForm = () => {
    this.setState(prevState => {
      return { isShowNewItemForm: !prevState.isShowNewItemForm };
    });
  };

  getShowNewItemFormBtn = () => {
    return (
      <div onClick={this.toggleShowNewItemForm}>
        <p className="addCardText">Add an item...</p>
      </div>
    );
  };

  getNewItemForm = () => {
    return (
      <form>
        <textarea type="text" placeholder="Enter a new list item..." />
        {/* <button onClick={this.toggleShowNewItemForm}>X</button> */}
        <Icon iconType="window-close" />
      </form>
    );
  };

  render() {
    const listItemslis = this.props.items.map((itemName, idx) => {
      return <ListItems key={idx} itemName={itemName} />;
    });
    let form = this.state.isShowNewItemForm
      ? this.getNewItemForm()
      : this.getShowNewItemFormBtn();
    return (
      <div className="card">
        <h2 className="cardTitleText">{this.props.title}</h2>
        <ul>{listItemslis}</ul>
        {form}
      </div>
    );
  }
}

export default Card;
