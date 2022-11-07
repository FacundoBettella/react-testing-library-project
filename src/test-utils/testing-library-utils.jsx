import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

/*ui = standard way to whatever jsx you want to render */
const renderWithContext = (ui, options) => {
  return render(ui, { wrapper: OrderDetailsProvider, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method with the context
export { renderWithContext as render };
