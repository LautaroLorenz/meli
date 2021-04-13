import React from "react";
import "./search-result.page.scss";
import { Routing } from "../../core";
import { SearchBarComponent } from '../../components';

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
        <SearchBarComponent search={this.state.search} />
      </>
    );
  }
}

export { SearchResultPage };
