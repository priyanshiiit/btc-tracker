import React, { useEffect, useState } from "react";
import PriceCard from "../components/PriceCard";
import { API_URL, FLASH_PERIOD, PRICE_REFRESH_PERIOD } from "../constants";

const HomePage = () => {
  const [priceData, setPriceData] = useState<{ [key: string]: number } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  let timeoutId: NodeJS.Timeout;

  // Function to fetch bitcoin price in 3 different currencies
  const fetchBitcoinPriceData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/simple/price?ids=bitcoin&vs_currencies=usd,jpy,eur`
      );
      if (!response.ok) {
        alert("API limit reached");
      } else {
        const data = await response.json();
        setPriceData(data?.bitcoin);

        // Delays loading to false for visual feedback for price update
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, FLASH_PERIOD);
      }
    } catch (error) {
      console.error("Error fetching Bitcoin priceData:", error);
    }
  };

  useEffect(() => {
    fetchBitcoinPriceData();
    const intervalId = setInterval(fetchBitcoinPriceData, PRICE_REFRESH_PERIOD);
    return () => {
      // clear intervals to prevent memory leak
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex flex-col mt-20">
      <h1 className="text-4xl font-bold text-center m-10">
        Multi-Currency Bitcoin Price
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        {priceData ? (
          Object.entries(priceData).map(([symbol, price], index: number) => {
            return (
              <PriceCard
                key={index}
                symbol={symbol}
                price={price}
                loading={loading}
              />
            );
          })
        ) : (
          <h1 className="text-2xl font-bold text-center m-10">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
