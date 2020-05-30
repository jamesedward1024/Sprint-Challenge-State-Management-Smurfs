import React, { useState, useReducer } from 'react';
import { addSmurf, getData } from '../actions'
import { connect } from 'react-redux'
import axios from 'axios';

const SmurfForm = props => {
  
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  }) 

  const handleName = e => {
    setSmurf({
      ...smurf,
      name: e.target.value
    })
    console.log(smurf)
  }

  const handleAge = e => {
    setSmurf({
      ...smurf,
      age: e.target.value
    })
    console.log(smurf)
  }

  const handleHeight = e => {
    setSmurf({
      ...smurf,
      height: e.target.value
    })
    console.log(smurf)
  }


  const handleSubmit = e => {
    props.addSmurf(smurf)
    props.getData()
  }

  return (
    <div>
      <form>
        <input 
          type="text" 
          value={smurf.name}
          name="name"
          onChange={handleName}
          placeholder="Smurf Name"
        />
        <input 
          type="text" 
          value={smurf.age}
          name="age"
          onChange={handleAge}
          placeholder="Age"
        />
        <input 
          type="text" 
          value={smurf.height}
          name="height"
          onChange={handleHeight}
          placeholder="Height"
        />
        <button onClick={() => {
          handleSubmit()
          console.log(props.smurfs)
        }}>Add Smurf</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { addSmurf, getData }
)(SmurfForm);