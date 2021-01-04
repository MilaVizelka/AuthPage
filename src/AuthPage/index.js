import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import "./index.scss";
import Form from "./component/Form/index";

function App() {
  return (
    <>
      <section className="authPage">
        <div className="formContainer ">
          <header style={{ textTransform: "uppercase" }}>
            <Arrow /> <p>Вернуться</p>
          </header>

          <Logo />
          <Form />
        </div>
      </section>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <filter id="blur">
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
        </filter>
      </svg>
    </>
  );
}

export default App;
