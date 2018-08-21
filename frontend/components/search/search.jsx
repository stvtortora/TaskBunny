import { connect } from 'react-redux';
import React from 'react';
import { modDropdown, dropDownItemSelected } from '../../actions/dropdown_actions';
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
      this.setState({
        searchQuery: ''
    });
  }

  componentWillReceiveProps(newProps) {
    debugger
    if(!newProps.path && this.props.path){
      debugger
      this.setState({
        searchQuery: ''
      })
    }else if(newProps.input || newProps.input === ''){
      this.setState({
        searchQuery: newProps.input
      })
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if(nextProps.input){
  //     return({
  //       searchQuery: nextProps.input
  //     });
  //   }
  //   return null;
  // }

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
    if(this.props.show){
      return (
        <div className="search">
          <input className='search_bar' type="text" value={this.state.searchQuery} placeholder={this.props.placeholder}  onClick={this.handleClick} onChange={ this.handleChange } />
          <QueryDropdown searchQuery={this.state.searchQuery} open={this.props.open}path={ this.props.path } type={this.props.type}/>
        </div>
      );
    }

    return null;
  }
}



export default Search;
