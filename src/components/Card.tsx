import React from "react";

const Card = ({ symbol, price }: { symbol: string; price: number }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-64">
      <div className="flex flex-col">
        <span className="text-gray-600 font-semibold mb-2">{symbol}</span>
        <span className="text-xl font-bold">{price}</span>
      </div>
    </div>
  );
};

export default Card;