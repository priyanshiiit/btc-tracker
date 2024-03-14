import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsTable from "../components/DetailsTable";
import { getFormattedData } from "../utils";
import { API_URL, FLASH_PERIOD, PRICE_REFRESH_PERIOD } from "../constants";
import { FormattedData } from "../types";

const DetailsPage = () => {
  const [pairData, setPairData] = useState<FormattedData[] | null>();
  const [loading, setLoading] = useState(true);
  const { currency = "usd" } = useParams();
  let timeoutId: NodeJS.Timeout;

  const getPairDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/simple/price?ids=bitcoin&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
      );

      if (!response.ok) {
        alert("API limit reached");
      } else {
        const data = await response.json();
        const formattedData = getFormattedData(data.bitcoin, currency);
        setPairData(formattedData);
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, FLASH_PERIOD);
      }
    } catch (error) {
      console.error("Error fetching Bitcoin prices:", error);
    }
  };

  useEffect(() => {
    getPairDetails();
    const intervalId = setInterval(getPairDetails, PRICE_REFRESH_PERIOD);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex justify-center mt-20">
      {currency && (
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center m-10">
            BTC/{currency.toUpperCase()} Pair Data
          </h1>
          <div>
            {pairData ? (
              <DetailsTable data={pairData} loading={loading} />
            ) : (
              <h1 className="text-2xl font-bold text-center m-10">
                Loading...
              </h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
