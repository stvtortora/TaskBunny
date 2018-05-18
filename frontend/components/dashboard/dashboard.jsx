import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import CategorySuggestions from './category_suggestions_container';
import Greeting from './greeting_container';
import CategorySearch from '../search/category_search_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const uiMessages = this.props.ui_messages.map(message => {
      return <div>{message}</div>
    });
    return (
      <span className='homepage' onClick={() => this.props.modDropdown(false)}>
        <NavBar />
        <section className="all-content">
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

// this.openDropdown = this.openDropdown.bind(this);
// this.closeDropdown = this.closeDropdown.bind(this);
// this.handleChange = this.handleChange.bind(this);

// openDropdown(e) {
//   e.stopPropagation()
//   this.setState({ clicked: true })
// }
//
// closeDropdown() {
//   this.setState({ clicked: false })
// }

// switchDropdown(value) {
//   e => {
//     const change = !this.state.clicked;
//     this.setState({clicked: [value]});
//   }
// }

// handleChange(e) {
//   // clearTimeout(this.timer);
//   // debugger
//   // this.timer = setTimeout(() => {
//   //   this.setState({
//   //     queryString: e.currentTarget.value
//   //   });
//   // }, 1000);
//   this.setState({ queryString: e.currentTarget.value });
//   // debugger
// }

// <div className="search">
//   <input className='search_bar' type='text' placeholder="Need something different?" onClick={this.openDropdown} onChange={ this.handleChange } />
//   <QueryDropdown queryString={ this.state.queryString } clicked={ this.state.clicked }/>
// </div>
