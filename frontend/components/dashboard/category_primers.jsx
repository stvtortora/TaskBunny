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
      const primerInfo = {
        'Mounting & Installation': ['Mount a TV', window.staticImages.mounting_pic, 'Mounting'],
        'Moving & Packing': ['Make a move', window.staticImages.moving_pic, 'Moving'],
        'Furniture Assembly': ['Put together furniture', window.staticImages.furniture_pic, 'Assembly']
      }
      const thisInfo = primerInfo[category.title]
      const message = thisInfo[0]
      const picture = thisInfo[1];
      const displayName = thisInfo[2]

      return <CategoryPrimer category={category} picture={picture} message={message} displayName={displayName}/>
    });

    return (
      <div className='category-primers-container'>
        <div className='category-primers'>
          {primers}
        </div>
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
