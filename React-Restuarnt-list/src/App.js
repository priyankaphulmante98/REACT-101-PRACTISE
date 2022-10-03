import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";

function App() {
  return (
    <>
      <div data-testid="restaurants-container">
        <RestaurantDetails  />
      </div>
    </>
  );
}

export default App;
