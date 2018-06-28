import React, { Component } from 'react';
import { Card, NewListBtn } from '../components';

class Main extends Component {
  state = {
    cards: [
      {
        title: 'Jobs Sourcing',
        items: ['Widget.io', 'data.data', 'warbler.com']
      },
      {
        title: 'In Pipeline',
        items: ['hackersnooze.zzz']
      },
      {
        title: 'Offers',
        items: ['linkedlist.com']
      }
    ]
  };
  render() {
    const cardLis = this.state.cards.map(({ title, items }, idx) => {
      return <Card key={idx} title={title} items={items} />;
    });
    return (
      <div className="main">
        <h1>Finding all the jobs</h1>
        <div className="cardDiv">
          <ul className="card-ul">{cardLis}</ul>
          <NewListBtn />
        </div>
      </div>
    );
  }
}

export default Main;
