import "./App.css";
import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
// import { SummaryForm } from "./pages/summary/SummaryForm";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
      {/* <SummaryForm /> */}
    </Container>
  );
}

export default App;
