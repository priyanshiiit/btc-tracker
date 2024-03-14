import React from "react";
import Shimmer from "./Shimmer";
import { FormattedData } from "../types";

const DetailsTable = ({
  data,
  loading,
}: {
  data: FormattedData[];
  loading: boolean;
}) => {
  return (
    <div>
      <table className="shadow-lg bg-white">
        <tbody>
          {data?.map((rowData: FormattedData, index: number) => (
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

const Row = ({ label, value }: { label: string; value: any }) => {
  return (
    <tr>
      <td className="border px-2 md:px-8 py-4">{label}</td>
      <td className="border px-2 md:px-8 py-4">{value}</td>
    </tr>
  );
};

export default DetailsTable;
