import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import CategorySuggestions from './category_suggestions';
import Greeting from './greeting_container';
import CategorySearch from '../search/category_search_container';
import TasksIndex from './tasks_index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: 'search'}
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  // componentDidMount() {
  //   if(this.props.ui_messages.length > 0) {
  //     this.props.resetForm();
  //   }
  // }

  updateDisplay (display) {
    return () => {
      this.setState({
        display
      })
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
      <div>
        <NavBar updateDisplay={this.props.user.type === 'Client' ? this.updateDisplay : null}/>
        {this.props.user.type === 'Client' && this.state.display === 'tasks' ? <div className='task_index'><TasksIndex id={this.props.user.id}/></div> :
        <span className='homepage' onClick={() => this.props.modDropdown(false)}>
          <div id={this.props.user.type === 'Tasker' ? 'tasker-homepage' : idName} className={contentClass}>
            <div className='ui-messages'>
              {uiMessages}
            </div>
            <Greeting notTasker={notTasker}/>
          </div>
        </span>
      }
      </div>
    );
  }
}
// <div className='category-search-container'>
//    <CategorySearch show={notTasker} type={null}/>
// </div>

export default Dashboard;
