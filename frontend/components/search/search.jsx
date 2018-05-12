import { connect } from 'react-redux';
import React from 'react';
import { modDropdown, dropDownItemSelected } from '../../actions/entities_actions';
import QueryDropdown from './query_dropdown_container';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {queryString: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.modDropdown(true);
  }

  handleChange(e) {
    this.setState({ queryString: e.currentTarget.value });
  }

  render() {

    return (
      <div className="search">
        <input className='search_bar' type="text" value={this.props.input} placeholder={this.props.placeholder}  onClick={this.handleClick} onChange={ this.handleChange } />
        <QueryDropdown queryString={ this.state.queryString } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const input = state.entities.searchbar.input.value
  return {
    input
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modDropdown: (status) => dispatch(modDropdown(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
