import React from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions'

const SmurfList = props => {
  return (
    <div>
      <button onClick={() => props.getData()}>GET SMURFS</button>
      {props.smurfs.map(smurf => {
          return <h4 key={smurf.id}>{smurf.name}</h4>
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(SmurfList)