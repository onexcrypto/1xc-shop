import React,{useEffect, useMemo} from 'react';
import './App.css';
import { createPaymentButton } from '1xc-payment-package';

function App() {

  const handlePaymentCallback = (error: unknown, transactionId: unknown) => {
    if (error) {
      console.error('Erreur de paiement :', error);
    } else {
      console.log('Paiement réussi ! Transaction ID :', transactionId);
    }
  };

  const options = useMemo(() => ({
    text: '1xc Pay',
      targetSelector: '#payment-button',
      amount: Number(100.00),
      currency: 'EUR',
      callback: handlePaymentCallback,
  }), []);

  useEffect(() => {
    createPaymentButton(options);
  }, [options])
  return (
    <div className="App">
      <div id="payment-button"></div>
    </div>
  );
}

export default App;
