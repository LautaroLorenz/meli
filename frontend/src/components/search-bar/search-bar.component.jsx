import React from "react";
import "./search-bar.component.scss";
import { Row, Col } from 'react-flexbox-grid';
import { SearchBoxComponent } from '..';

class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: props.search
    };
  }

  render() {
    return (
      <div className="search-bar">
        <Row>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
          <Col xs={12} sm={12} md={10} lg={10} >
            <div className="logo-wrapper">
              <a className="logo" href="/">Mercado Libre Argentina - Donde comprar y vender de todo</a>
              <SearchBoxComponent value={this.state.search} />
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
        </Row>
      </div>
    );
  }
}

export { SearchBarComponent };