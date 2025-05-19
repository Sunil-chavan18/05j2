import React, { useState } from 'react';

function Transfers() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    setMessage(`Transferred $${amount} to ${recipient}`);
    setRecipient('');
    setAmount('');
  };

  return (
    <div className="transfers-page">
      <h2>Transfers</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label>Recipient:</label>
          <input type="text" value={recipient} onChange={e => setRecipient(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
        </div>
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Transfers; 