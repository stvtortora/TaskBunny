import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import CategorySuggestions from './category_suggestions_container';
import Greeting from './greeting_container';
import CategorySearch from '../search/category_search_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.ui_messages.length > 0) {
      this.props.resetForm();
    }
  }

  render() {
    debugger
    const uiMessages = this.props.ui_messages.map(message => {
      return <div>{message}</div>
    });

    const idName = this.props.user ? 'homepage' : 'generic-homepage';

    return (
      <span className='homepage' onClick={() => this.props.modDropdown(false)}>
        <NavBar />
        <section id={idName} className="all-content">
          <div className='ui-messages'>
            {uiMessages}
          </div>
          <Greeting />
          <CategorySearch />
        </section>
      </span>
    );
  }
}

export default Dashboard;
