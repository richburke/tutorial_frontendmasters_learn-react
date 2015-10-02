
import React from 'react';
import warning from 'react/lib/warning';
import md5 from 'md5';
import {validateEmail} from './functions';

const GRAVATAR_URL = 'http://www.gravatar.com/avatar';

let fetchData = cb => {
  setTimeout(() => {
    cb([
      {id: 1, name: 'Rich Burke', email: 51},
      {id: 2, name: 'Ryan Florence', email: 'rpflorence@gmail.com'},
      {id: 3, name: 'Michael Jackson', email: 'mjijackson@gmail.com'}
    ]);
  }, 500);
};

export default class Exercise2 extends React.Component {

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

    let items = this.state.data;
    items = items.map(item => {
      return <li key={item.id}><Gravatar email={item.email} /> {item.name}</li>;
    });

    return (
      <div>
        <h1>Users</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

/**
 * Custom validation type.
 * @see http://www.ian-thomas.net/custom-proptype-validation-with-react/
 */
let emailType = (props, propName, componentName) => {
  warning(
    validateEmail(props[propName]),
    `Invalid ${propName} for ${componentName}.`
  );
}

class Gravatar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let hash = md5(this.props.email);
    let url = `${GRAVATAR_URL}/${hash}?s=${this.props.size}`;

    return (
      <img src={url} width={this.props.size} />
    );
  }
}

Gravatar.propTypes = {
  email: emailType,
  size: React.PropTypes.number.isRequired
};
Gravatar.defaultProps = {size: 36};
