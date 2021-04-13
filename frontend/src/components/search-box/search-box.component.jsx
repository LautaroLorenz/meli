import React from "react";
import "./search-box.component.scss";

class SearchBoxComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxlength: 120,
      placeholder: 'Nunca dejes de buscar',
      label: 'Ingresá lo que quieras encontrar',
      value: props.value ?? ''
    };
  }

  render() {
    return (
      <form
        className="search-box"
        action="/items?search="
        method="GET"
        role="search">

        <input
          name="search"
          type="search"
          className="search-input"
          aria-label={this.state.label}
          placeholder={this.state.placeholder}
          maxLength={this.state.maxlength}
          defaultValue={this.state.value}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          tabIndex="1"
          autoFocus />

        <button
          type="submit"
          className="search-button"
          tabIndex="2">
          <div
            className="search-icon"
            role="img"
            aria-label="Buscar"
          ></div>
        </button>

      </form>
    );
  }
}

export { SearchBoxComponent };