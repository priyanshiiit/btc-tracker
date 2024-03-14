import React from "react";
import { Link } from "react-router-dom";

const Card = ({ symbol, price }: { symbol: string; price: number }) => {
  return (
    <Link to={`/overview/${symbol}`}>
      <div className="bg-white rounded-lg shadow-md p-6 w-64">
        <div className="flex flex-col">
          <span className="text-gray-600 font-semibold mb-2">{symbol}</span>
          <span className="text-xl font-bold">{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
