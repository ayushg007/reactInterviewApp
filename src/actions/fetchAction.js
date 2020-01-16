
 const fetchAllInterviews = (data) => {
   return {
    type: 'FETCH',
    data: data
   }
 }

export function fetchAllData() {
  return (dispatch) => {
    return fetch('http://localhost:3001/interviews')
        .then(results => {
          return results.json();
        }).then(data => {
            dispatch(fetchAllInterviews(data))
        })
  }
} 