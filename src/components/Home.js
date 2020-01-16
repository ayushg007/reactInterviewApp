import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from "mobx-react";
@inject("InterviewStore")
@observer

class Home extends Component {
    render(){
        const { interviews } = this.props.InterviewStore;
        const interviewsList = interviews.length ? (
          interviews.map(interview => {
            return (
              <div className="interview card" key={interview.id}>
                <div className="card-content">
                  <Link to={'/' + interview.id}>
                    <span className="card-title red-text">{interview.title}</span>
                  </Link>
                  <p>{}</p>
                </div>
              </div>
            )
          })
        ) : (
          <div className="center">No interviews to show...</div>
        );
      return (
        <div>
          
          <div className="container home">
            <h4 className="center">All Interviews</h4>
            {interviewsList}

          </div>
          <Link to='/addnew'>
                    <span className="card-title blue-text">Add New</span>
            </Link>
        </div>
      )
    }
  }


  export default Home;