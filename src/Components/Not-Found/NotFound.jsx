import React from 'react';

export default function NotFound() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3"> <span className="text-danger">Page not found!</span> </p>
        <a href="/" className="btn btn-primary">Go Home</a>
      </div>
    </div>
  );
}