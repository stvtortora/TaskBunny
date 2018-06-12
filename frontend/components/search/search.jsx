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
    this.props.action();

    if(this.props.path){
      this.setState({
        searchQuery: ''
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.input){
      return({
        searchQuery: nextProps.input
      });
    }
    return null;
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
        <input className='search_bar' type="text" value={this.state.searchQuery} placeholder={this.props.placeholder}  onClick={this.handleClick} onChange={ this.handleChange } />
        <QueryDropdown searchQuery={this.state.searchQuery} open={this.props.open}path={ this.props.path }/>
      </div>
    );
  }
}



export default Search;
