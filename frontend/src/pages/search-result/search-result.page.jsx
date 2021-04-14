import React from "react";
import "./search-result.page.scss";
import { Routing } from "../../core";
import { BreadcrumbComponent, SearchBarComponent } from '../../components';
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
      if (!data) {
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
        { this.state.categories.length > 0 && <BreadcrumbComponent categories={this.state.categories} />}
      </>
    );
  }
}

export { SearchResultPage };
