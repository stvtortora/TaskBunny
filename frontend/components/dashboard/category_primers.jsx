import React from 'react';
import { connect } from 'react-redux';
import { fetchCategorySuggestions } from '../../actions/dashboard_actions';
import { addToTask } from '../../actions/tasks_actions';

import CategoryPrimer from './category_primer';

class CategoryPrimers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategorySuggestions();
  }

  render() {
    const primers = Object.keys(this.props.categorySuggestions).slice(0, 3).map((title) => {
      const category = this.props.categorySuggestions[title];
      const pictures = {
        'Mounting & Installation': window.staticImages.mounting_pic,
        'Moving & Packing': window.staticImages.moving_pic,
        'Furniture Assembly': window.staticImages.furniture_pic
      }
      const picture = pictures[category.title];

      return <CategoryPrimer category={category} picture={picture}/>
    });

    return (
      <div className='category-suggestions'>
        {primers}
      </div>
    );
  }
  }

  const mapStateToProps = (state) => {
    const categorySuggestions = state.entities.categorySuggestions;
    return {
      categorySuggestions
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchCategorySuggestions: () => dispatch(fetchCategorySuggestions())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPrimers);
