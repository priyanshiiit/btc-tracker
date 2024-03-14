import React from "react";
import Shimmer from "./Shimmer";

// Todo: update types
const DetailsTable = ({ data, loading }: { data: any; loading: boolean }) => {
  return (
    <div>
      <table className="shadow-lg bg-white">
        <tbody>
          {data?.map((rowData: any, index: number) => (
            // Todo: update types above
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
      <td className="border px-8 py-4">{label}</td>
      <td className="border px-8 py-4">{value}</td>
    </tr>
  );
};

export default DetailsTable;
