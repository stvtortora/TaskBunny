import React from 'react';
import QueryDropdown from './query_dropdown_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {queryString: ''};
    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  updateQuery(e) {
    this.setState({
      queryString: e.currentTarget.value
    });
  }

  render() {
    return (
      <section>
        <input type='text' onChange={ this.updateQuery } />
        <QueryDropdown queryString={ this.state.queryString }/>
      </section>
    );
  }
}

export default Dashboard;
