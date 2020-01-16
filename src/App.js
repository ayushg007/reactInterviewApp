import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Interview from './components/Interview';
import Addnew from './components/Addnew';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchAllData}  from './actions/fetchAction'

class App extends Component  {

  componentDidMount() {
    this.props.fetchAllData();
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllData: () => dispatch(fetchAllData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
