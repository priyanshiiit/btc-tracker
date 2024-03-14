import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";

const DetailsPage = () => {
  const [pairData, setPairData] = useState<{ [key: string]: number } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const { currency } = useParams();

  const getPairDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
      );

      if (!response.ok) {
        alert("API limit reached");
      } else {
        const data = await response.json();
        console.log(data);
        setPairData(data.bitcoin);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Error fetching Bitcoin prices:", error);
    }
  };

  useEffect(() => {
    // getPairDetails();
    // // TODO: time interval should come from constant
    // const intervalId = setInterval(getPairDetails, 10000);
    // return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {currency && (
        <div className="flex flex-col justify-center">
          <h1>BTC/{currency.toUpperCase()} Details</h1>
          <div>
            <table className="shadow-lg bg-white">
              <tbody>
                <tr>
                  <td className="border px-8 py-4">Price</td>
                  <td className="border px-8 py-4">
                    {loading ? <Shimmer /> : pairData?.[currency]}
                  </td>
                </tr>
                <tr>
                  <td className="border px-8 py-4">Market Cap</td>
                  <td className="border px-8 py-4">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      pairData?.[`${currency}_market_cap`].toFixed(2)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border px-8 py-4">Volume(24hrs)</td>
                  <td className="border px-8 py-4">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      pairData?.[`${currency}_24h_vol`].toFixed(2)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border px-8 py-4">Change(24hrs)</td>
                  <td className="border px-8 py-4">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      pairData?.[`${currency}_24h_change`].toFixed(2)
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
