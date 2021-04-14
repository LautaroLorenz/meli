import "./accent-button.component.scss";

function AccentButton(props) {
  return (
    <button className="accent-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export { AccentButton };