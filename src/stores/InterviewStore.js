import { observable, action, computed } from "mobx";
import axios from 'axios';

class InterviewStore {
    @observable interviews = [];
    //  fetch all the interviews
    @action fetchAllData = () => {
      axios.get("http://localhost:3001/interviews")
        .then(results => {
          console.log( results.data);
          this.interviews=results.data;
        });
    };

    @action editInterview = (interview,participants) => {
            axios.put('http://localhost:3001/interviews/'+interview.id.toString(), {'interview':interview, 'p': participants})
            .then(res => {
              console.log(res.data);
              let newInterviews = this.interviews.filter(interView => {
                return interview.id.toString() !== interView.id.toString()
                });
                newInterviews.push(res.data);
                this.interviews = newInterviews;
            })
    }

    @action createInterview = (interview,participants) => {
          console.log(participants);
          return (
            axios.post('http://localhost:3001/interviews', {'interview': interview, 'p':participants})
              .then((res) => {
              console.log(res.data);
              this.interviews.push(res.data)
              })
          )
        }

    @action deleteInterview = (id) => {
          return (
            axios.delete('http://localhost:3001/interviews/'+id.toString())
            .then(res => {
                let newInterviews = this.interviews.filter(interview => {
                    return interview.id.toString() !== id.toString()
                  });
                this.interviews = newInterviews;
            })
          )
      }

}

const store = new InterviewStore();
export default store;