import React from "react";
import "./search-box.component.scss";
import { Row, Col } from 'react-flexbox-grid';

class SearchBoxComponent extends React.Component {
  render() {
    return (
      <div className="search-box">
        <Row>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
          <Col xs={12} sm={12} md={10} lg={10} >
            <a className="logo" href="/">
              Mercado Libre Argentina - Donde comprar y vender de todo
            </a>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
        </Row>
      </div>
    );
  }
}

export { SearchBoxComponent };