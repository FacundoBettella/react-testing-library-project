import React from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";
import SummaryForm from "./SummaryForm";

const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts.scoops);
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>{value}</li>
  ));

  const toppingsArray = Object.entries(optionCounts.toppings);
  const toppingsList = toppingsArray.map(([key, value]) => (
    <li key={key}>{key}</li>
  ));

  return (
    <>
      <div>Order Summary</div>
      <h2>Scoops: {totals.scoops}</h2>
      <ul>{scoopList}</ul>

      <h2>Toppings: {totals.toppings}</h2>
      <ul>{toppingsList}</ul>
      <SummaryForm />
    </>
  );
};

export default OrderSummary;
