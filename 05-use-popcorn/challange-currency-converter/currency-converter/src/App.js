// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";

export default function App() {
  const [output, setOutput] = useState("OUTPUT");
  const [input, setInput] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR"); // Default "from" currency
  const [toCurrency, setToCurrency] = useState("USD"); // Default "to" currency
  const [isLoading, setIsLoading] = useState(false); // Default "to" currency

  function handleInputChange(event) {
    setInput(event.target.value);
    console.log("Handle Input Change ", event.target.value);
  }
  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
    console.log("Handle from currency change  ", e.target.value);
  }
  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value);
    console.log("Handle to currency Change ", e.target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );

          const data = await res.json(); // Await here to resolve the Promise
          setOutput(data.rates[toCurrency]);
          console.log("data rates []", data.rates[toCurrency]);
          console.log("data", data); // Now `data` contains the actual JSON object
          setIsLoading(false);
        } catch (e) {
          if (e.name === "AbortError") {
            console.log("Fetch aborted"); // Log aborted requests
          } else {
            console.error("Error fetching data:", e);
          }
        }
      }
      if (fromCurrency === toCurrency) return setOutput(input);
      fetchData();
      // Cleanup function to abort the fetch if input changes before completion
      return () => controller.abort();
    },
    [input, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        disabled={isLoading}
        onChange={(event) => handleInputChange(event)}
      />
      <select
        value={fromCurrency}
        onChange={handleFromCurrencyChange}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={handleToCurrencyChange}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {input} {fromCurrency} is approximately {output} {toCurrency}
      </p>
    </div>
  );
}
