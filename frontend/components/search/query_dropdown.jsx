import React from 'react';
import { withRouter } from 'react-router';

class QueryDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(data) {
    if(this.props.dataType === 'category'){
      this.props.addToTask({ category_id: data.id });
      this.props.history.push(this.props.path);
    } else {
      this.props.dropDownItemSelected(data);
    }
      // const idType = `${this.props.dataType}_id`;
      // case 'location':
  }

  render() {
    const data = this.props.results.map((data) => {

      return <li key={data.id} onClick={() => this.handleClick(data)}>{data.title}</li>
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
