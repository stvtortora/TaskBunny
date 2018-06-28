import React from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../actions/time_slots_actions';

class EditSchedule extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {date: null};
  }

  componentDidMount(){
    this.props.fetchTimeSlots().then(response => {
      this.setState({
        date: Object.keys(response.timeSlots.days)[0]
      });
    });
  }

  handleClick (e){
    this.setState({
      date: e.currentTarget.getAttribute('value')
    });
  }

  render(){
    let days = null;
    let times = null;
    
    if(this.props.timeSlots.days && this.state.date){
      days = Object.keys(this.props.timeSlots.days).map(day => {
        return <div value={day} onClick={this.handleClick}>{day}</div>
      });
      times = this.props.timeSlots.days[this.state.date].map(time => {
          return <div>{time.title}</div>
      });
    }

    return (
      <div>
        <div className='schedule-days'>
          {days}
        </div>
        <div>
          {times}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  const registrationIds = state.session.timeSlotIds;
  const timeSlots = state.taskerInfo.timeSlots;

  return {
    registrationIds,
    timeSlots
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTimeSlots: () => dispatch(fetchTimeSlots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSchedule);
