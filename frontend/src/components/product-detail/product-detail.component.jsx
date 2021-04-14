
import {
  AccentButtonComponent,
  PriceComponent
} from '../../components';
import "./product-detail.component.scss";

function ProductDetailComponent(props) {
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
            <PriceComponent price={item.price} />
          </div>
          <AccentButtonComponent onClick={comprarAction}>Comprar</AccentButtonComponent>
        </div>
      </div>
      <div className="description">
        {item.description &&
          <>
            <div className="title">Descripción del producto</div>
            <div className="text">{item.description}</div>
          </>
        }
      </div>
    </div>
  )
}

export { ProductDetailComponent };