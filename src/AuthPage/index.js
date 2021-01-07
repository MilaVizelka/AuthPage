import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import Form from "./component/Form/index";
import "./index.scss";
function App() {
  return (
    <>
      <section className="authPage">
        <div className="authPage__formContainer">
          <header>
            <Arrow />
            <p>Вернуться</p>
          </header>
          <Logo style={{ zIndex: "4" }} />
          <Form />
        </div>
      </section>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <filter id="blur">
          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
        </filter>
      </svg>
    </>
  );
}

export default App;
