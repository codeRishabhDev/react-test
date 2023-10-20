// src/components/ThankYouPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();
  // Your thank you page component
  return (
    <div>
      <div className="wrapper-1">
        <div className="wrapper-2">
          <h1>Thank you !</h1>
          <p>Thanks for subscribing to our news letter. </p>
          <p>you should receive a confirmation email soon </p>
          <button className="go-home" onClick={() => { navigate('/') }}>
            go home
          </button>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;