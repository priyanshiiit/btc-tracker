import React from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

// TODO: rename to Price card
const PriceCard = ({
  symbol,
  price,
  loading,
}: {
  symbol: string;
  price: number;
  loading: boolean;
}) => {
  return (
    <Link to={!loading ? `/details/${symbol}` : ""}>
      <div className="bg-white rounded-lg shadow-md p-6 w-64">
        <div className="flex flex-col">
          <span className="text-gray-600 font-semibold mb-2">{symbol}</span>
          {loading ? (
            <Shimmer />
          ) : (
            <span className="text-xl font-bold">{price}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PriceCard;
