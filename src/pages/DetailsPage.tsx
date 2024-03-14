import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  // TODO: set types
  const [pairData, setPairData] = useState<any>(null);
  const { currency } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
      );

      if (!response.ok) {
        alert("Failed to fetch Bitcoin prices");
      }

      const data = await response.json();
      console.log(data);
      setPairData(data.bitcoin);
    } catch (error) {
      console.error("Error fetching Bitcoin prices:", error);
    }
  };

  useEffect(() => {
    // TODO: rename
    // getData();
  }, []);
  return (
    <>
      {currency && (
        <div className="flex flex-col justify-center">
          <h1>BTC/{currency.toUpperCase()} Details</h1>
          <div>
            <table className="shadow-lg bg-white">
              <tr>
                <td className="border px-8 py-4">Price</td>
                <td className="border px-8 py-4">{pairData?.[currency]}</td>
              </tr>
              <tr>
                <td className="border px-8 py-4">Market Cap</td>
                <td className="border px-8 py-4">
                  {pairData?.[`${currency}_market_cap`].toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-4">Volume(24hrs)</td>
                <td className="border px-8 py-4">
                  {" "}
                  {pairData?.[`${currency}_24h_vol`].toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border px-8 py-4">Change(24hrs)</td>
                <td className="border px-8 py-4">
                  {" "}
                  {pairData?.[`${currency}_24h_change`].toFixed(2)}
                </td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
