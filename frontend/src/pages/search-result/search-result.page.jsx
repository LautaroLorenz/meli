import React from "react";
import "./search-result.page.scss";
import { Row, Col } from 'react-flexbox-grid';
import { Routing } from "../../core";
import {
  BreadcrumbComponent,
  SearchBarComponent,
  ItemListComponent
} from '../../components';
import { ItemsAPI } from '../../api';

class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: Routing.getQueryParam(this.props.location.search, "search"),
      categories: [],
      items: []
    };
  }

  componentDidMount() {
    ItemsAPI.getItems(this.state.search).then(({ data }) => {
      if (!data || !data.items || !data.items.length) {
        alert('Ups! no se encontraron resultados');
        return;
      }

      const { categories, items } = data;
      this.setState({ categories, items });
    }).catch(() => {
      alert('Ups! falló la lectura de datos');
    });
  }

  render() {
    return (
      <>
        <SearchBarComponent search={this.state.search} />
        <Row>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
          <Col xs={12} sm={12} md={10} lg={10} >
            <div className="breadcrumb-wrapper">
              {this.state.categories.length > 0 &&
                <BreadcrumbComponent categories={this.state.categories} />
              }
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
          <Col xs={12} sm={12} md={10} lg={10} >
            <div className="item-list-wrapper">
              {this.state.items.length > 0 &&
                <ItemListComponent items={this.state.items} />
              }
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
        </Row>
      </>
    );
  }
}

export { SearchResultPage };
