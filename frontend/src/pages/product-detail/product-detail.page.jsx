import React from "react";
import "./product-detail.page.scss";
import {
  SearchBarComponent
} from '../../components';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id
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

export { ProductDetailPage };
