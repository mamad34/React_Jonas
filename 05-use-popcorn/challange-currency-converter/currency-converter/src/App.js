// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";
export default function App() {
  const [output, setOutput] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
      );
      const data = await res.json(); // Await here to resolve the Promise
      console.log("data", data); // Now `data` contains the actual JSON object
    }
    fetchData();
  }, []);

  return (
    <div>
      <input type="text" />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}