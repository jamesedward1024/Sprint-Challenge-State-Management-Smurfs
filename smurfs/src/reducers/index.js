
import { 
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  ADD_SMURF,
  // GET_SMURFS_FAILURE
 } from '../actions'

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ''
      }
    // case GET_SMURFS_FAILURE:
    //   return {
    
    //   }
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }
    default:
      return state;
  }
}

// export const addSmurfState = {
//   name: '',
//   age: null,
//   height: ''
// }

// export const addSmurfReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADDING_SMURF_ON_FORM':
//       return {
//         ...state,
//         name: action.payload,
//         age: action.payload,
//         height: action.payload
//       }
//     default:
//       return state;
//   }
// }