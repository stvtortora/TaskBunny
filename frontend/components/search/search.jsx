import { connect } from 'react-redux';
import React from 'react';
import { modDropdown, dropDownItemSelected } from '../../actions/entities_actions';
import QueryDropdown from './query_dropdown_container';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchQuery: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.clearSearchBar();
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.modDropdown(true);
  }

  handleChange(e) {
    if(this.timeout){
      clearTimeout(this.timeout);
    }
    this.setState(
      { searchQuery: e.target.value },
      () => {
        this.timeout = setTimeout(() => this.props.fetchResults(this.state.searchQuery).then(() => {
          this.props.modDropdown(true)
        }), 500)
      }
    );
  }

  render() {
    return (
      <div className="search">
        <input className='search_bar' type="text" value={this.props.input} placeholder={this.props.placeholder}  onClick={this.handleClick} onChange={ this.handleChange } />
        <QueryDropdown path={ this.props.path }/>
      </div>
    );
  }
}



export default Search;
