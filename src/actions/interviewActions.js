export const deleteInterview = (id) => {
    return {
      type: 'DELETE_INTERVIEW',
      id
    }
  }

export const addInterview =() => {
    return {
        type: 'ADD_INTERVIEW'
      }
}