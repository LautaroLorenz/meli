import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductDetailPage, SearcherPage, SearchResultPage } from "./pages";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearcherPage}></Route>
          <Route exact path="/items" component={SearchResultPage}></Route>
          <Route path="/items/:id" component={ProductDetailPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
