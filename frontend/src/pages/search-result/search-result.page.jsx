import React from "react";
import "./search-result.page.scss";
import { Routing } from "../../core";
import { SearchBarComponent } from '../../components';
import { ItemsAPI } from '../../api';

class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: Routing.getQueryParam(this.props.location.search, "search")
    };
  }

  componentDidMount() {
    ItemsAPI.getItems(this.state.search).then((result) => {
      console.log('search', this.state.search);
      console.log('result', result);
    }).catch(() => {
      alert('Ups! falló la lectura de datos');
    });

    ItemsAPI.getItem(2).then((result) => {
      console.log('ID', 2);
      console.log('result', result);
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

export { SearchResultPage };
