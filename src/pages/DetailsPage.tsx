import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import DetailsTable from "../components/DetailsTable";

const DetailsPage = () => {
  // Todo: update types
  const [pairData, setPairData] = useState<any[] | null>();
  const [loading, setLoading] = useState(true);
  const { currency = "usd" } = useParams();

  // Todo: update types
  const getFormattedData = (data: any, currency: string) => {
    return [
      { label: "Price", value: currency },
      {
        label: "Market Cap",
        value: data?.[`${currency}_market_cap`].toFixed(2),
      },
      {
        label: "Volume(24hrs)",
        value: data?.[`${currency}_24h_vol`].toFixed(2),
      },
      {
        label: "Change(24hrs)",
        value: data?.[`${currency}_24h_change`].toFixed(2),
      },
    ];
  };

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
        const formattedData = getFormattedData(data.bitcoin, currency);
        setPairData(formattedData);
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
            {pairData && <DetailsTable data={pairData} loading={loading} />}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
