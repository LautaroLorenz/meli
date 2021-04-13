import React from "react";
import { Routing } from "../../core";
import { Link } from "react-router-dom";

class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: Routing.getQueryParam(this.props.location.search, "search")
    };
  }

  render() {
    return (
      <>
        <div>Search Result "{this.state.search}"</div>
        <p>
          <Link to="/items/2">
            <button>View Detail</button>
          </Link>
        </p>
      </>
    );
  }
}

export { SearchResultPage };
