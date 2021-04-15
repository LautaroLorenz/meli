import Loader from "react-loader-spinner";
import "./loader.component.scss";

function LoaderComponent() {
  return (
    <div className="loader-wrapper">
      <Loader type="Circles" className="loader" height={80} width={80} />
    </div>
  )
}

export { LoaderComponent }