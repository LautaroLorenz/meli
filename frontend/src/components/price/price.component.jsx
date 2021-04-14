import NumberFormat from 'react-number-format';
import "./price.component.scss";

function PriceComponent(props) {
  const price = props.price;

  return (
    <NumberFormat
      className="price-value"
      value={price.amount}
      displayType={'text'}
      thousandSeparator={'.'}
      decimalSeparator={','}
      decimalScale={price.decimals}
      prefix={'$ '}
    />
  )
}

export { PriceComponent }