import React from "react";
import { Link } from "react-router-dom";

class SearcherPage extends React.Component {
  render() {
    return (
      <>
        <div>Searcher</div>
        <p>
          <Link to="/items?search=hola mundo">
            <button>Search</button>
          </Link>
        </p>
      </>
    );
  }
}

export { SearcherPage };
