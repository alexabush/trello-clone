import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Icon from '../components/Icon';

class SearchForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <form action="#">
          <input
            className="searchFormInput"
            type="text"
            id="search"
            name="search"
          />
          <Icon iconType={faSearch} iconClass="searchIcon" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
