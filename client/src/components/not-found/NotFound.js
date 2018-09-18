import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="row">
      <Link to="/profiles" className="btn btn-light">
        Go Back
              </Link>
      <div className="col-sm-12 text-center">
        <i className="fas fa-exclamation-triangle"></i>
        <h1 className="display-4">Page Not Found</h1>
        <p>Sorry, this page does not exist</p>
      </div>
    </div >
  );
};
