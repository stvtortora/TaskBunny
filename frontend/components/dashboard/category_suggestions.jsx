import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addToTask, fetchCategorySuggestions } from '../../actions/entities_actions';

class CategorySuggestions extends React.Component {
  // debugger

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchCategorySuggestions();
  }

  handleClick(category) {
    this.props.addToTask({ category });
    this.props.history.push("/taskform/details");
  }

  render() {
    debugger
    const suggestionButtons = Object.keys(this.props.categorySuggestions).map((title) => {
      const category = this.props.categorySuggestions[title];
      return <li key={category.id} onClick={() => this.handleClick(category)}>{category.title}</li>
    });

    return (
      <div className='category-suggestions'>
        <ul className="category-row" id='row-one'>
          {suggestionButtons.slice(0, 3)}
        </ul>
        <ul className="category-row" id='row-two'>
          {suggestionButtons.slice(3)}
        </ul>
      </div>
    );
  }
  }

  const mapStateToProps = (state) => {
    const categorySuggestions = state.entities.categorySuggestions;
    debugger
    return {
      categorySuggestions
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      addToTask: (task_info) => dispatch(addToTask(task_info)),
      fetchCategorySuggestions: () => dispatch(fetchCategorySuggestions())
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategorySuggestions));
