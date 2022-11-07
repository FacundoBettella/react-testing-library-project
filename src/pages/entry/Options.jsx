import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ScoopOptions from "./ScoopOptions";
import ToppingsOptions from "./ToppingsOptions";
import Row from "react-bootstrap/Row";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";


const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent =
    optionType === "scoops" ? ScoopOptions : ToppingsOptions;

  const title =
    optionType[0].toUpperCase() + optionType.slice(1).toLowerCase(0);

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>{title} total: {formatCurrency(totals[optionType])}</p>
      <Row>{optionItems}</Row>;
    </Fragment>
  );
};

export default Options;
