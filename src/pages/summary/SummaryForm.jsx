import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [disabledCheckbox, setDisabledCheckbox] = useState(false);

  const handlerClick = () => {
    setDisabled(!disabled);
    setDisabledCheckbox(!disabledCheckbox);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          id="disabled-button-checkbox"
          type="checkbox"
          defaultChecked={disabledCheckbox}
          aria-checked={disabledCheckbox}
          onChange={(e) => handlerClick(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button
        onClick={handlerClick}
        disabled={disabled}
        variant="primary"
        type="submit"
      >
        Confirm Order
      </Button>
    </Form>
  );
};
