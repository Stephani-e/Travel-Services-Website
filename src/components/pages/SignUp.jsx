import React, { useState } from 'react';
import '../../App.css';
import './SignUp.css';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

export default function SignUp() {
  const [subscribed, setSubscribed] = useState(false);
  const [width, height] = useWindowSize();

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 8000); // reset confetti
  };

  return (
    <div className="sign-up-container">
      {subscribed && <Confetti width={width} height={height} />}
      
      <h1 className="sign-up-title">👍 LIKE & 🔔 SUBSCRIBE</h1>
      <p className="sign-up-subtext">Stay updated with our latest adventures!</p>

      <button className="subscribe-btn" onClick={handleSubscribe}>
        SUBSCRIBE
      </button>
    </div>
  );
}
