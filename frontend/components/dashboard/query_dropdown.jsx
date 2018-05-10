import React from 'react';

class QueryDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearch(id) {

  }

  render() {
    const categories = this.props.results.map((category) => {
      <li key={category.id} onClick={this.handleSearch(category.id)}>category.name</li>
    });

    return (
      <ul>
        {categories}
      </ul>
    );
  }
}

export default QueryDropdown;
