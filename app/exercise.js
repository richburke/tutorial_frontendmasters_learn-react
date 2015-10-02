
import React from 'react';
import sortBy from 'sort-by';

let fetchData = cb => {
  setTimeout(() => {
    cb({
      title: 'Menu',
      data: [
        {name: 'Lunchbox', type: 'american'},
        {name: 'Lobster Joint', type: 'seafood'},
        {name: 'Bounty', type: 'fancy'},
        {name: 'Xian Famous', type: 'chinese'},
        {name: 'McDonalds', type: 'fast'}
      ]
    });
  }, 500);
};

export default class Exercise extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loaded: false
    };
  }

  componentDidMount() {
    fetchData(data => {
      this.setState({
        data,
        loaded: true
      });
    });
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading</div>;
    }

    console.log(this.state);

    let title = this.state.data.title;
    let items = this.state.data.data;

    items = items.filter(item => {
      return item.type !== 'fast';
    })
    .sort(sortBy('name'))
    .map(item => {
      return <li>{item.name} : {item.type} </li>
    });

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}
