import React, { useEffect, useState } from "react";
import PriceCard from "../components/PriceCard";
import { API_URL, FLASH_PERIOD, PRICE_REFRESH_PERIOD } from "../constants";

const HomePage = () => {
  const [priceData, setPriceData] = useState<{ [key: string]: number } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  let timeoutId: NodeJS.Timeout;

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
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, FLASH_PERIOD);
      }
    } catch (error) {
      console.error("Error fetching Bitcoin priceData:", error);
    }
  };

  useEffect(() => {
    // fetchBitcoinPriceData();
    // const intervalId = setInterval(fetchBitcoinPriceData, PRICE_REFRESH_PERIOD);
    // return () => {
    //   clearInterval(intervalId);
    //   clearTimeout(timeoutId);
    // };
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {priceData ? (
        Object.entries(priceData).map(([symbol, price], index: any) => {
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
        <h1 className="text-2xl font-bold text-center m-10">
          Price data unavailable at the moment...
        </h1>
      )}
    </div>
  );
};

export default HomePage;
