
import React from 'react';

let fetchUsers = cb => {
  setTimeout(() => {
    cb([{name: "Barley"}, {name: "Kilty"}, {name: "Bosco"}, {name: "Daisy"}]);
  }, 500);
};

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetchUsers(users => {
      this.setState({
        users,
        loaded: true
      });
    });
  }

  woof(user) {
    console.log(user.name + ' says "Woof!"');
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading</div>;
    }

    let users = this.state.users.map(user => {
      return <li onClick={this.woof.bind(this, user)}>{user.name}</li>;
    })

    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}
