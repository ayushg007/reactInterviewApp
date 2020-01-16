import axios from 'axios';

const createInterviewAction = (data) => {
    return {
      type: 'CREATE_INTERVIEW',
      data: data
     }
  }
 
  export function createInterview (interview,participants) {
   return dispatch => {
     console.log(participants);
     return (
       axios.post('http://localhost:3001/interviews', {'interview': interview, 'p':participants})
         .then((res) => {
         console.log(res.data);
         dispatch(createInterviewAction(res.data))
         })
     )
   }
  }