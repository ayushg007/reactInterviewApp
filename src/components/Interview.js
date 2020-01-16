import React, { Component } from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom';

import { inject, observer } from "mobx-react";
@inject("InterviewStore")
@observer

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
          this.props.InterviewStore.deleteInterview(id);
          this.props.history.push('/');
    }
    render() {
      const id = this.props.match.params.interview_id;
      const interview = this.props.InterviewStore.interviews.find(interview => interview.id.toString() === id.toString())
      const interView = interview !== undefined ? (
        <div className="interview">
          <h4 className="center">{interview.title}</h4>
          <h5>Interview Details:</h5>
      <p>Date : {interview.date}</p>
      <p>Start: {interview.start_time}</p>
          <p>End:{interview.end_time}</p>
          <p> Participants :</p>
        <p>{this.state.participantList}</p>
          <div className="center">
          <button className="btn yellow" >
          <Link to={"/interviews/"+interview.id.toString()+"/edit"}>Edit</Link>
          </button>
            <button className="btn grey" onClick={()=> this.handleClick(interview.id)}>
              Delete Interview
            </button>
          </div>
        </div>
      ) : (
        <div className="center">Loading Interview...</div>
      );
  
      return (
        <div className="container">
          {interView}
        </div>
      )
    }
  }
  
  
  export default (Interview)
  