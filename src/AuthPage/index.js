import Form from "./component/Form/index";
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

          <img
            src="https://svgshare.com/i/Svz.svg"
            title="logo"
            alt="logo"
            style={{ zIndex: "4" }}
          />
          <Form />
        </div>
      </section>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <filter id="blur">
          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
        </filter>
        <image filter="url(#blur)"></image>
      </svg>
    </>
  );
}

export default App;
