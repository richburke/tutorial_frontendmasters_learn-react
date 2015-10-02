
import React from 'react';

let fetchData = cb => {
  setTimeout(() => {
    cb([
      {id: 1, name: 'Rich Burke', email: 51},
      {id: 2, name: 'Ryan Florence', email: 'rpflorence@gmail.com'},
      {id: 3, name: 'Michael Jackson', email: 'mjijackson@gmail.com'}
    ]);
  }, 500);
};

export default class Lesson3 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    }
  }

  toggleShowDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  renderDetails() {
    return this.state.showDetails ? this.props.children : null;
  }

  render() {
    let cls = "ContentToggle__Summary";

    if (this.state.showDetails) {
      cls += '--open';
    }

    return (
      <div className="ContentToggle">
        <h4 onClick={this.toggleShowDetails.bind(this)} className={cls}>{this.props.summary}</h4>
        <div className="ContentToggle__Details">
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}
