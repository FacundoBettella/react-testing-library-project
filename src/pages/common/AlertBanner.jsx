import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertBanner = ({
  message = "An unexpected error ocurred. Please try again later.",
  variant = "danger",
}) => {
  return (
    <Alert variant={variant} style={{ backgroundColor: "red" }}>
      {message}
    </Alert>
  );
};

export default AlertBanner;
