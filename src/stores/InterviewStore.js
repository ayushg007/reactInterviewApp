import { observable, action, computed } from "mobx";
import axios from 'axios';

class InterviewStore {
    @observable interviews = [];
    //  fetch all the interviews
    @action fetchInterviews = () => {
      axios.get("http://localhost:3001/interviews")
        .then(results => {
          console.log( results.data);
        });
    };
}

const store = new InterviewStore();
export default store;