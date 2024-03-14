import { FormattedData, PairData } from "../types";

export const getFormattedData = (
  data: PairData,
  currency: string
): FormattedData[] => {
  return [
    { label: "Price", value: data?.[currency].toString() },
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
      value: data?.[`${currency}_24h_change`].toFixed(2) + " %",
    },
  ];
};
