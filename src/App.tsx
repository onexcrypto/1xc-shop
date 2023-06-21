import { useMemo } from "react";
import "./App.css";
import { Onexc } from "onexcpay-js";

function App() {
  const handlePaymentCallback = (error: unknown, transactionId: unknown) => {
    if (error) {
      console.error("Erreur de paiement :", error);
    } else {
      console.log("Paiement réussi ! Transaction ID :", transactionId);
    }
  };

  const options = useMemo(
    () => ({
      text: "1xc Pay",
      targetSelector: "#payment-button",
      amount: Number(100.0),
      currency: "EUR",
      callback: handlePaymentCallback,
    }),
    []
  );

  return (
    <div className="App">
      <button
        onClick={() =>
          Onexc.gateway.launch({
            mode: "test",
            apiKey: "0xxcccccc",
            intentId: "hello world",
          })
        }
      >
        Pay now
      </button>
    </div>
  );
}

export default App;
