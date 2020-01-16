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
import {fetchAllData}  from './actions/interviewActions'

class App extends Component  {

  componentDidMount() {
    axios.get('http://localhost:3001/interviews')
    .then(res => {
      console.log(res.data)
      this.props.fetchAllData(res.data);
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />*/}
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
    fetchAllData: (data) => dispatch(fetchAllData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
