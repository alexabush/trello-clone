import React, { Component } from 'react';
import { ListItems } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Icon from '../components/Icon';

class Card extends Component {
  state = {
    isShowNewItemForm: true,
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('current state: ', this.state);
    console.log('A name was submitted: ' + this.state.value);
    debugger;
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
      <div>
        <form id="newListItemForm" onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            className="textArea"
            placeholder="Enter a new list item..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <button type="submit" form="newListItemForm" className="addCard">
          Add Card
        </button>
        <Icon
          iconType={faWindowClose}
          iconClass="icon"
          hasBackground="true"
          onClick={this.toggleShowNewItemForm}
        />
      </div>
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
