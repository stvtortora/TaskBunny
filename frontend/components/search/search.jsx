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
    if(!newProps.path && this.props.path){
      this.setState({
        searchQuery: ''
      })
    }else if(newProps.input || newProps.input === ''){
      this.setState({
        searchQuery: newProps.input
      })
    }
  }

  handleClick (e) {
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
          if (this.props.type) {
            this.props.setResultsType(this.props.type);
          }
          this.props.modDropdown(true)
        }), 500)
      }
    );
  }

  render() {
    const tasker = this.props.addResource ? true : false;

    if(this.props.show){
      return (
        <div className="search" id={tasker ? 'tasker-search' : 'client-search'} >
          <input className='search_bar' id={tasker ? 'tasker-search-bar' : 'client-search-bar'} type="text" value={this.state.searchQuery} placeholder={this.props.placeholder}  onClick={this.handleClick} onChange={ this.handleChange } />
          {
            this.props.type && this.props.type === this.props.resultsType ?
            <QueryDropdown addResource={ this.props.addResource } reduceSize={tasker ? true : false} searchQuery={this.state.searchQuery} open={this.props.open}path={ this.props.path } type={this.props.type}/>
            : null
          }
        </div>
      );
    }

    return null;
  }
}



export default Search;
