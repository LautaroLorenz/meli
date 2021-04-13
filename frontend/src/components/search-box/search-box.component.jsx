import React from "react";
import "./search-box.component.scss";
import { Row, Col } from 'react-flexbox-grid';

class SearchBoxComponent extends React.Component {
  render() {
    return (
      <div className="search-box">
        <Row>
          <Col xs={12} sm={3} md={2} lg={1} ></Col>
          <Col xs={6} sm={6} md={8} lg={10} >
            Search box
          </Col>
          <Col xs={6} sm={3} md={2} lg={1} ></Col>
        </Row>
      </div>
    );
  }
}

export { SearchBoxComponent };