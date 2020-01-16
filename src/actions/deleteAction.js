import axios from 'axios';

const deleteInterviewAction = (id) => {
    return {
      type: 'DELETE_INTERVIEW',
      id
    }
  }
  
  export function deleteInterview (id){
    return dispatch => {
      return (
        axios.delete('http://localhost:3001/interviews/'+id.toString())
        .then(res => {
            dispatch(deleteInterviewAction(id));
        })
      )
    }
  }
  
  