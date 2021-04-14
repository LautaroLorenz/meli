import React from "react";
import "./breadcrumb.component.scss";

class BreadcrumbComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: props.categories ?? []
    }
  }

  render() {
    return <>Breadcrumb {this.state.categories.length}</>;
  }
}

export { BreadcrumbComponent };