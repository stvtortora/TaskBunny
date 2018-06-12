import React from 'react';
import { withRouter } from 'react-router';

class QueryDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(data) {
    if(this.props.path){
      this.props.addToTask({ category: data });
      this.props.history.push(this.props.path);
    } else {
      this.props.dropDownItemSelected(data);
    }
  }

  render() {
    const data = Object.keys(this.props.searchResults).map((id) => {
      const result = this.props.searchResults[id];
      return <li key={id} onClick={() => this.handleClick(result)}>{result.title}</li>
    });

    if(this.props.open && data.length > 0 && this.props.searchQuery.length > 0) {

      return (
        <ul className='query_results'>
          {data}
        </ul>
      );
    }
    return null;
  }
}

export default withRouter(QueryDropdown);
