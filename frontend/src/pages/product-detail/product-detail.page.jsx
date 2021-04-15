import React from "react";
import "./product-detail.page.scss";
import {
  BreadcrumbComponent,
  SearchBarComponent,
  ProductDetailComponent,
  LoaderComponent
} from '../../components';
import { Row, Col } from 'react-flexbox-grid';
import { ItemsAPI } from '../../api';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      id: props.match.params.id,
      categories: [],
      item: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    ItemsAPI.getItem(this.state.id).then(({ data }) => {
      if (!data || !data.item) {
        alert('Ups! no se encontraron resultados');
        return;
      }

      const { categories, item } = data;
      this.setState({ categories, item });
    }).catch(() => {
      alert('Ups! falló la lectura de datos');
    }).finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        <SearchBarComponent search={this.state.search} />
        {this.state.loading && <LoaderComponent />}
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
            {this.state.item &&
              <div className="product-wrapper">
                <ProductDetailComponent item={this.state.item} />
              </div>
            }
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
        </Row>
      </>
    );
  }
}

export { ProductDetailPage };
