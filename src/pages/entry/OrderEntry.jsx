import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = () => {
  const { total } = useOrderDetails();

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
};

export default OrderEntry;
