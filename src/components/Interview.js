import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteInterview } from '../actions/deleteAction'
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Interview extends Component {
    constructor(props) {
      super(props);
      this.state = {
        participantList: []
      }
    }
    componentDidMount(){
        let participantList="";
        Axios.get('http://localhost:3001/interviews/'+this.props.match.params.interview_id)
        .then(res => {
        console.log(res.data);
        participantList = res.data.participants.map(participant => {
          return(
            <div key={participant.id} >
                <p>  Email: {participant.email}</p>
                <p> Resume: {participant.resume_file_name}</p>
            </div>
          )
        })
        console.log(participantList);
        this.setState(
          {
            participantList:participantList
          }
        )
    })
    }
    handleClick = (id) => {
          //console.log(res.data)
          this.props.deleteInterview(id);
          this.props.history.push('/');
    }
    render() {
    
      const interview = this.props.interview ? (
        <div className="interview">
          <h4 className="center">{this.props.interview.title}</h4>
          <h5>Interview Details:</h5>
      <p>Date : {this.props.interview.date}</p>
      <p>Start: {this.props.interview.start_time}</p>
          <p>End:{this.props.interview.end_time}</p>
          <p> Participants :</p>
        <p>{this.state.participantList}</p>
          <div className="center">
          <button className="btn yellow" >
          <Link to={"/interviews/"+this.props.interview.id.toString()+"/edit"}>Edit</Link>
          </button>
            <button className="btn grey" onClick={()=> this.handleClick(this.props.interview.id)}>
              Delete Interview
            </button>
          </div>
        </div>
      ) : (
        <div className="center">Loading Interview...</div>
      );
  
      return (
        <div className="container">
          {interview}
        </div>
      )
    }
  }
  
  const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.interview_id;
    return {
      interview: state.interviews.find(interview => interview.id.toString() === id.toString())
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteInterview: (id) => dispatch(deleteInterview(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Interview)
  