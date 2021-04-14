import Loader from "react-loader-spinner";
import "./loader.component.scss";

function LoaderComponent() {
  return (
    <>
      <Loader type="Circles" className="loader" height={80} width={80} />
    </>
  )
}

export { LoaderComponent }