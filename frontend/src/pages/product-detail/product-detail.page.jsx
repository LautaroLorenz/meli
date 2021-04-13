import React from "react";
import "./product-detail.page.scss";

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      productDetail: {
        id: props.match.params.id
      } 
    };
  }

  render() {
    return <>Product Detail "{this.state.productDetail.id}"</>;
  }
}

export { ProductDetailPage };
