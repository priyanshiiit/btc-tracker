import React from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

type PriceCardProps = {
  symbol: string;
  price: number;
  loading: boolean;
};
const PriceCard = ({ symbol, price, loading }: PriceCardProps) => {
  return (
    <Link to={!loading ? `/details/${symbol}` : ""}>
      <div className="bg-white rounded-lg shadow-md p-6 w-64">
        <div className="flex flex-col justify-center items-center text-center">
          <span className="text-gray-600 font-semibold mb-2">
            {`BTC/${symbol.toUpperCase()}`}
          </span>
          {loading ? (
            <Shimmer />
          ) : (
            <span className="text-2xl font-bold">{price}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PriceCard;
