import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Shop from "./Component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./Component/Oder-review/Order";
import Inventory from "./Component/Inventory/Inventory";
import Placeoder from "./Component/placeOder/placeOder";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/placeoder">
            <Placeoder></Placeoder>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
