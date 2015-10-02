
import React from 'react';
import assign from 'react/lib/Object.assign';

export default class Exercise3 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0
    }
  }

  handleTabClick(index) {
    this.setState({
      activeTabIndex: index
    });
  }

  renderTabs() {
    let activeTabIndex = this.state.activeTabIndex;

    return this.props.countries.map((country, index) => {
      return (
        <div key={country.name} onClick={this.handleTabClick.bind(this, index)} style={index === activeTabIndex ? styles.activeTab : styles.tab}>
          {country.name}
        </div>
      );
    });
  }

  renderPanel() {
    let activeTabIndex = this.state.activeTabIndex;
    let country = this.props.countries[activeTabIndex];

    return (
      <div>
        <p>{country.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.app}>
        <div style={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div style={styles.panel}>
          {this.renderPanel()}
        </div>
      </div>
    );
  }
}

let styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = assign({}, styles.tab, {
  borderBottomColor: '#000'
});

styles.panel = {
  padding: 10
};
