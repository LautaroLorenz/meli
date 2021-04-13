import React from "react";
import "./searcher.page.scss";
import { SearchBoxComponent } from '../../components';

class SearcherPage extends React.Component {
  render() {
    return (
      // <>
      //   <div>Searcher</div>
      //   <p>
      //     <Link to="/items?search=hola mundo">
      //       <button>Search</button>
      //     </Link>
      //   </p>
      // </>
      <>
        <SearchBoxComponent />
      </>
    );
  }
}

export { SearcherPage };
