import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Addnew from './components/Addnew'
import Edit from './components/Edit';
import Interview from './components/Interview'
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { inject, observer } from "mobx-react";

@inject("InterviewStore")
@observer

class App extends Component  {

  componentDidMount() {
    this.props.InterviewStore.fetchAllData();
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/addnew' component={Addnew} /> 
            <Route path='/interviews/:interview_id/edit' component={Edit} />
            <Route path='/:interview_id' component={Interview} /> 
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default (App);
