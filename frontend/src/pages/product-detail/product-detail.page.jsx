import React from "react";

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
