import React, { Component } from 'react';
import SearchForm from '../containers/SearchForm';
import Icon from '../components/Icon';
import { faSearch, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <SearchForm />
        <div className="header__icons">
          <Icon iconType={faPlus} iconClass="icon" hasBackground="true" />
          <Icon iconType={faBell} iconClass="icon" hasBackground="true" />
        </div>
      </div>
    );
  }
}

export default Header;
