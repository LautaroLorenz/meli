import React from "react";
import "./product-detail.page.scss";
import {
  AccentButton,
  BreadcrumbComponent,
  SearchBarComponent
} from '../../components';
import { Row, Col } from 'react-flexbox-grid';
import { ItemsAPI } from '../../api';
import NumberFormat from 'react-number-format';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      categories: [],
      item: null
    };
  }

  componentDidMount() {
    ItemsAPI.getItem(this.state.id).then(({ data }) => {
      if (!data || !data.item) {
        alert('Ups! no se encontraron resultados');
        return;
      }

      const { categories, item } = data;
      this.setState({ categories, item });
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
            <div className="product-wrapper">
              {this.state.item &&
                <ProductDetail item={this.state.item} />
              }
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
        </Row>
      </>
    );
  }
}

function ProductDetail(props) {
  const item = props.item;
  const condition = item.condition === 'new' ? 'Nuevo' : 'Usado';
  const condition_sold = condition.concat(' - ').concat(item.sold_quantity).concat(' vendidos');

  function comprarAction() {
    alert('Compraste el producto!!');
  }

  return (
    <div className="product">
      <div className="product-info">
        <div className="picture">
          <img
            src={item.picture}
            alt={item.title} />
        </div>
        <div className="panel">
          <div className="condition-sold">{condition_sold}</div>
          <div className="item-title">{item.title}</div>
          <div className="price">
            <NumberFormat
              value={item.price.amount}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'$ '}
            />
          </div>
          <AccentButton onClick={comprarAction}>Comprar</AccentButton>
        </div>
      </div>
      <div className="description">
        <div className="title">Descripción del producto</div>
        <div className="text">{item.description}</div>
      </div>
    </div>
  )

}

export { ProductDetailPage };
