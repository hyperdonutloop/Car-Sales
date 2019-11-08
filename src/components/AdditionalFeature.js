import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../reducers/actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} ({props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;
export default connect(
  null, { addFeature }
)(AdditionalFeature)

//anytime you are passing an argument to a function, have a buffer