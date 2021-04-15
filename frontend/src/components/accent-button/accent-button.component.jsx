import "./accent-button.component.scss";

function AccentButtonComponent(props) {
  return (
    <button className="accent-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export { AccentButtonComponent };