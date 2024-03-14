import React from "react";
import Card from "../components/Card";

const data = [
  { sybmol: "usd", price: 112 },
  { sybmol: "eur", price: 112 },
  { sybmol: "gbp", price: 112 },
];

const HomePage = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {data.map((value: any, index: any) => {
        return <Card key={index} symbol={value.sybmol} price={value.price} />;
      })}
    </div>
  );
};

export default HomePage;
