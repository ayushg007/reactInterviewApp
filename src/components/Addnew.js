import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import { inject, observer } from "mobx-react";
@inject("InterviewStore")
@observer

class Addnew extends React.Component{
    state = {
        title : null,
        starttime:null,
        endtime:null,
        date:null,
        participant_emails : null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', this.state);
        let interview= {
            'title': this.state.title, 'start_time': this.state.starttime, 'end_time': this.state.endtime,'date':this.state.date
        }
        this.props.InterviewStore.createInterview(interview,this.state.participant_emails);
        this.props.history.push('/');
      }
    render(){
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="date">Date: </label>
            <input type="date" id="date" onChange={this.handleChange} />
            <label htmlFor="starttime">Start Time: </label>
            <input type="time" id="starttime" placeholder="2020-01-04T03:40" onChange={this.handleChange} />
            <label htmlFor="endtime">End Time: </label>
            <input type="time" id="endtime" placeholder="2020-01-04T03:40" onChange={this.handleChange} />
            <label htmlFor="participants">Participants Emails: </label>
            <input type="text" id="participant_emails" onChange={this.handleChange} />
        
              <button>Submit</button>
            </form>
          </div>
        )
    }
}


export default (Addnew);