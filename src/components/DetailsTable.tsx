import React from "react";
import Shimmer from "./Shimmer";
import { FormattedPairData } from "../types";

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => {
  return (
    <tr>
      <td className="border px-2 md:px-8 py-4">{label}</td>
      <td className="border px-2 md:px-8 py-4">{value}</td>
    </tr>
  );
};

const DetailsTable = ({
  data,
  loading,
}: {
  data: FormattedPairData[];
  loading: boolean;
}) => {
  return (
    <div>
      <table className="shadow-lg bg-white">
        <tbody>
          {data?.map((rowData: FormattedPairData, index: number) => (
            <Row
              key={index}
              label={rowData.label}
              value={loading ? <Shimmer /> : rowData.value}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
