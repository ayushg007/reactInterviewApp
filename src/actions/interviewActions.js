export const deleteInterview = (id) => {
    return {
      type: 'DELETE_INTERVIEW',
      id
    }
  }

 export const fetchAllData = (data) => {
   return {
    type: 'FETCH',
    data: data
   }
 }

 export const createInterview = (data) => {
   return {
     type: 'CREATE_INTERVIEW',
     data: data
    }
 }
 
 export const editInterview = (data) => {
  return {type: 'EDIT_INTERVIEW', data: data}
}