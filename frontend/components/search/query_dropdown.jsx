import React from 'react';
import { withRouter } from 'react-router';

class QueryDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(data) {
    debugger
    if(this.props.type === 'category' && this.props.userType !== 'Client'){
      this.props.createRegistration({ category_id: Number(data.id) })
    } else if(this.props.path){
      this.props.addToTask({ category: data });
      this.props.history.push(this.props.path);
    } else if(this.props.type === 'location'){
      this.props.editTaskerLocation(data);
    }
    this.props.dropDownItemSelected(data);
  }

  render() {
    const data = Object.keys(this.props.searchResults).map((id) => {
      const result = this.props.searchResults[id];
      return <li key={id} onClick={() => this.handleClick(result)}>{result.title}</li>
    });

    if(this.props.open && data.length > 0 && this.props.searchQuery.length > 0) {
      return (
        <ul className='query_results' id={this.props.reduceSize ? 'tasker-query-results' : 'query-results'}>
          {data}
        </ul>
      );
    }
    return null;
  }
}

export default withRouter(QueryDropdown);
