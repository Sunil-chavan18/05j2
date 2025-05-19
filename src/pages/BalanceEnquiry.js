import React, { useState } from 'react';

function BalanceEnquiry() {
  const [balance, setBalance] = useState(null);

  const handleCheckBalance = () => {
    // Simulate fetching balance
    setBalance('$5,000.00');
  };

  return (
    <div className="balance-enquiry-page">
      <h2>Balance Enquiry</h2>
      <button onClick={handleCheckBalance}>Check Balance</button>
      {balance && (
        <div className="balance-result">
          <h3>Your Balance:</h3>
          <p>{balance}</p>
        </div>
      )}
    </div>
  );
}

export default BalanceEnquiry; 