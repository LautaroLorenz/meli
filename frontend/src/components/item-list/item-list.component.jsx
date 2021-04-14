import React from "react";
import { useHistory } from "react-router-dom";
import { generatePath } from "react-router";
import "./item-list.component.scss";
import { PriceComponent } from '../../components';

class ItemListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items
    };
  }

  hasSibling(itemIndex) {
    return typeof this.state.items[itemIndex + 1] !== 'undefined';
  }

  render() {
    const items = this.state.items;

    return (
      <div className="item-list">
        {items.map((item, index) => (
          <Item key={item.id} item={item} hasSibling={this.hasSibling(index)} />
        ))}
      </div>
    );
  }
}

function Item(props) {
  const item = props.item;
  const hasSibling = props.hasSibling;
  const history = useHistory();

  function handleClick() {
    const productDetailPagePath = generatePath("/items/:id/", { id: item.id });
    history.push(productDetailPagePath);
  }

  return (
    <div className="item" onClick={handleClick}>
      <div className="thumbnail">
        <img
          src={item.picture}
          alt={item.title} />
      </div>
      <div className="information">
        <div className="head">
          <div className="price">
            <PriceComponent price={item.price} />
            {item.free_shipping &&
              <div className="shipping"></div>}
          </div>
          <div className="location">
            {item.state_name}
          </div>
        </div>
        <div className="description">
          {item.title}
        </div>
      </div>
      {hasSibling &&
        <div className="border"></div>}
    </div>
  );
}

export { ItemListComponent };