import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductDetailPage, SearcherPage, SearchResultPage } from "./pages";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Switch>
          <Route exact path="/" component={SearcherPage} />
          <Route exact path="/items" component={SearchResultPage} />
          <Route path="/items/:id" component={ProductDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
