import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/InputBox";

function App() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convert = () => {
    setTo(from * currencyInfo[toCurrency]);
  };
  console.log(from);
  console.log(fromCurrency);
  console.log(to);
  console.log(toCurrency);
  return (
    <div className="fixed bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/global-virtual-currency-sign-techno-concept-background-design_1017-52482.jpg?semt=ais_hybrid')] min-h-screen min-w-full flex justify-center items-center">
      <div className="bg-white/20 backdrop-blur-sm border border-gray-200  p-8 rounded-xl flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <InputBox
            label={"From"}
            currency={fromCurrency}
            currencyTypes={options}
            amount={from}
            onChange={(e) => {
              setFrom(Number(e.target.value));
            }}
            onCurrChange={(e) => {
              setFromCurrency(e.target.value);
            }}
          ></InputBox>
          <div className="relative h-0.1">
            <button
              onClick={swap}
              className="h-10 w-18 text-lg cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-lg bg-blue-600 text-white px-2 py-0.5"
            >
              swap
            </button>
          </div>
          <InputBox
            label={"To"}
            disabled={true}
            amount={to}
            currency={toCurrency}
            currencyTypes={options}
            onCurrChange={(e) => {
              setToCurrency(e.target.value);
            }}
          ></InputBox>
        </div>
        <button
          onClick={convert}
          className="bg-blue-600 rounded-xl cursor-pointer h-14 text-white text-xl"
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
