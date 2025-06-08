// SuccessPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h2>Form Submitted Successfully</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
}

export default Success;
