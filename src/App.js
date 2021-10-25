import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Shop from "./Component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./Component/Oder-review/Order";
import Inventory from "./Component/Inventory/Inventory";
import Placeoder from "./Component/placeOder/placeOder";
import Notfound from "./Component/NotFound/Notfound";
import { createContext} from "react";

export const RingContext = createContext()

function App() {
  const Ornaments = 'gold ring'
  return (
    <div className="App">
      <RingContext.Provider value={Ornaments}>
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
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </RingContext.Provider>
    </div>
  );
}

export default App;
