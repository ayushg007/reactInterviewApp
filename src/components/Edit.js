import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Edit extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: null,
        start_time: null,
        end_time: null,
        date:null,
        participants:null,
      }
    }

    handleChange = (e) => {
      // console.log(e.target.id)
      // console.log(e.target.value)
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const date = e.target.elements.date.value;
      const start = e.target.elements.start_time.value;
      const end = e.target.elements.end_time.value;
      const title = e.target.elements.title.value;
      const participants = e.target.elements.participant_emails.value;
      let interview= {
        'title': title, 'start_time': start, 'end_time': end,'date':date
      }
      console.log(interview);
      axios.put('http://localhost:3001/interviews/'+this.props.match.params.interview_id.toString(), {'interview':interview, 'p': participants})
      .then(res => {
        console.log(res.data);
        this.props.editInterview(res.data);
        this.props.history.push('/');
      })
    }
  
    render() {
        const interview = this.props.interview;
        if(interview==null)
      {
          return (
            <div> Loading... </div>
          )
      }
        else {

          return (
            <div className="Edit">
               <h4> Edit Interview </h4>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="title">Title: </label>
                  <input type="text" id="title" onChange={this.handleChange} defaultValue={interview.title} />
                  <label htmlFor="date">Date: </label>
                  <input type="date" id="date" onChange={this.handleChange} placeholder="2020-01-04T03:40" defaultValue={interview.date} />
                  <label htmlFor="starttime">Start Time: </label>
                  <input type="time" id="start_time" onChange={this.handleChange} placeholder="2020-01-04T03:40" defaultValue = {interview.start_time.split("T").pop().split("Z")[0]} />
                  <label htmlFor="endtime">End Time: </label>
                  <input type="time" id="end_time" onChange={this.handleChange} placeholder="2020-01-04T03:40" defaultValue = {interview.end_time.split("T").pop().split("Z")[0]} />
                  <label htmlFor="participants">Participants: </label>
                  <input type="text" id="participant_emails" onChange={this.handleChange} />
                  <button>Submit</button>
                </form>
            </div>
          );
      }
    }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.interview_id;
  console.log(id);
  return {
    interview: state.interviews.find(interview => interview.id.toString() === id.toString())
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editInterview: (data)=> {
      dispatch({type: 'EDIT_INTERVIEW', data: data})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit);