import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: GET_SMURFS_FAILURE, payload: err.response })
      })
  }
}

export const ADD_SMURF = 'ADD_SMURF';

export const addSmurf = smurf => dispatch => {
    return axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res)
        const smurfAdded = { type: ADD_SMURF, payload: res.data.smurf }
        dispatch(smurfAdded)
      })
      .catch(err => {
        console.log(err.response)
      })
  }
  