import React from "react";
import "./product-detail.page.scss";
import {
  SearchBarComponent
} from '../../components';
import { ItemsAPI } from '../../api';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id
    };
  }

  componentDidMount() {
    ItemsAPI.getItem(this.state.id).then(({ data }) => {
      if (!data || !data.item) {
        alert('Ups! no se encontraron resultados');
        return;
      }

      console.log(data);
    }).catch(() => {
      alert('Ups! falló la lectura de datos');
    });
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
