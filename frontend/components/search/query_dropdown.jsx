import React from 'react';
import { withRouter } from 'react-router';

class QueryDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  executeSearch(id) {
    const idType = `${this.props.dataType}_id`;
    this.props.addToTask({ [idType]: id });
    if(this.props.path) {
      this.props.history.push(this.props.path);
    }
  }

  render() {
    const data = this.props.results.map((data) => {

      return <li key={data.id} onClick={() => this.executeSearch(data.id)}>{data.title}</li>
    });
    // debugger
    if(this.props.open && data.length > 0) {

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
