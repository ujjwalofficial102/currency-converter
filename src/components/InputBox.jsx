import React from "react";

export function InputBox({
  label,
  disabled = false,
  currencyTypes = [],
  amount,
  currency,
  onChange,
  onCurrChange,
}) {
  return (
    <div className="bg-white p-3  rounded-lg  flex gap-12">
      <div className="flex flex-col text-gray-500 text-xl font-normal">
        <div className="p-2 text-lg">{label}</div>
        <input
          onChange={onChange}
          value={amount}
          disabled={disabled}
          className="text-black font-medium p-2 outline-none w-full bg-transparent"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="flex flex-col text-gray-500 text-xl font-normal ">
        <div className="p-2 text-lg">Currency Type</div>
        <select
          value={currency}
          className="bg-gray-100 rounded-xl text-black font-medium p-2 outline-none cursor-pointer"
          onChange={onCurrChange}
        >
          {currencyTypes.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
