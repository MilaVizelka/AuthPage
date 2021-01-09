import Form from "./component/Form/index";
import Logo from "./assets/logo.png";

import "./index.scss";

function App() {
  return (
    <>
      <section className="authPage">
        <div className="authPage__formContainer">
          <header>
            <img
              src="https://svgshare.com/i/Sw9.svg"
              title="arrow"
              alt="arrow"
            />
            <p>Вернуться</p>
          </header>
          <img src={Logo} style={{ zIndex: "4" }} alt="logo" />
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
