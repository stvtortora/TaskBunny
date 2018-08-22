import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import CategorySuggestions from './category_suggestions';
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
    const uiMessages = this.props.ui_messages.map(message => {
      return <div>{message}</div>
    });

    const idName = this.props.user.id ? 'homepage' : 'generic-homepage';
    const notTasker = Boolean(!this.props.user.id || this.props.user.type === 'Client');
    const contentClass = notTasker ? "all-content" : "tasker-content"
    return (
      <span className='homepage' onClick={() => this.props.modDropdown(false)}>
        <NavBar />
        <section id={idName} className={contentClass}>
          <div className='ui-messages'>
            {uiMessages}
          </div>
          <Greeting />
          <CategorySearch show={notTasker} type={null}/>
        </section>
      </span>
    );
  }
}

export default Dashboard;
