import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const data = [
  { sybmol: "usd", price: 112 },
  { sybmol: "eur", price: 112 },
  { sybmol: "gbp", price: 112 },
];

const HomePage = () => {
  const [prices, setPrices] = useState<{ [key: string]: number }>({
    usd: 1000,
    jpy: 10,
    eur: 20,
  });

  const fetchBitcoinPrices = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,jpy,eur"
      );

      if (!response.ok) {
        alert("Failed to fetch Bitcoin prices");
      }

      const data = await response.json();
      console.log(data);
      setPrices(data.bitcoin);
    } catch (error) {
      console.error("Error fetching Bitcoin prices:", error);
    }
  };

  useEffect(() => {
    fetchBitcoinPrices();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {Object.entries(prices).map(([symbol, price], index: any) => {
        return <Card key={index} symbol={symbol} price={price} />;
      })}
    </div>
  );
};

export default HomePage;
