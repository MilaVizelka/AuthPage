import "./index.scss";
import React, { Suspense } from "react";
const Form = React.lazy(() => import("./component/Form/index"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Form />
          </Suspense>
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
