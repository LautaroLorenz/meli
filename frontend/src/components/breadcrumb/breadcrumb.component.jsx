import React from "react";
import "./breadcrumb.component.scss";
import classNames from "classnames";

class BreadcrumbComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: props.categories ?? []
    }
  }

  lastCategory() {
    if (this.state.categories.length === 0) {
      return undefined;
    }

    return this.state.categories[this.state.categories.length - 1];
  }

  notLastCategories() {
    if (this.state.categories.length < 2) {
      return [];
    }

    return this.state.categories.slice(0, this.state.categories.length - 1);
  }

  render() {
    const notLastCategories = this.notLastCategories();
    const lastCategory = this.lastCategory();

    return (
      <div className="breadcrumb">
        {notLastCategories.map(({ id, name }) =>
          (<Category key={id} name={name} last={false} />))}
        {lastCategory && <Category name={lastCategory.name} last={true}></Category>}
      </div>
    );
  }
}

function Category(props) {
  return (
    <>
      <span className={classNames({ "accent-category": props.last })}>
        {props.name}
      </span>
      {!props.last &&
        <span className="separator">&gt;</span>
      }
    </>
  );
}

export { BreadcrumbComponent };