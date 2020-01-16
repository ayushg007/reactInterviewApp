import axios from 'axios';

const editInterviewAction = (data) => {
    return {type: 'EDIT_INTERVIEW', data: data}
  }
  
  export function editInterview (interview,participants){
    return dispatch => {
      return (
        axios.put('http://localhost:3001/interviews/'+interview.id.toString(), {'interview':interview, 'p': participants})
        .then(res => {
          console.log(res.data);
          dispatch(editInterviewAction(res.data));
        })
      )
    }
  }