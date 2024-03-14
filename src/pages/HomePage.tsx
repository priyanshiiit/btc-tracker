import React, { useEffect, useState } from "react";
import PriceCard from "../components/PriceCard";

const HomePage = () => {
  const [prices, setPrices] = useState<{ [key: string]: number } | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBitcoinPrices = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,jpy,eur"
      );

      if (!response.ok) {
        alert("API limit reached");
      } else {
        const data = await response.json();
        console.log(data);

        setPrices(data.bitcoin);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Error fetching Bitcoin prices:", error);
    }
  };

  useEffect(() => {
    // fetchBitcoinPrices();
    // const intervalId = setInterval(fetchBitcoinPrices, 10000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {prices &&
        Object.entries(prices).map(([symbol, price], index: any) => {
          return (
            <PriceCard
              key={index}
              symbol={symbol}
              price={price}
              loading={loading}
            />
          );
        })}
    </div>
  );
};

export default HomePage;
