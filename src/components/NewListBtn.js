import React, { Component } from 'react';

class NewListBtn extends Component {
  state = {};
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            id="newListInput"
            name="newListInput"
            placeholder="Add a list..."
          />
        </form>
      </div>
    );
  }
}

export default NewListBtn;
