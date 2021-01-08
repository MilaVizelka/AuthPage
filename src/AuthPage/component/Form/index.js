import "./index.scss";
import React, { Suspense } from "react";
import NumberFormat from "react-number-format";
const ToggleSwitch = React.lazy(() => import("./SwitchButton/index"));

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        password: "",
        mobile: "",
      },
      errors: {
        password: "",
        mobile: "",
      },
    };
  }

  validate = (name, value) => {
    switch (name) {
      case "mobile":
        if (value.length !== 19) {
          return (
            <label
              className="formAuth__labelStyle"
              style={{
                position: "absolute",
                right: "5px",
                top: "15px",
              }}
            >
              <img
                src="https://svgshare.com/i/Sx_.svg"
                title="alert"
                alt="alert"
              />
            </label>
          );
        }
        return (
          <label
            className="formAuth__labelStyle"
            style={{
              position: "absolute",
              right: "5px",
              top: "20px",
            }}
          >
            <img
              src="https://svgshare.com/i/Svr.svg"
              title="success"
              alt="success"
            />
          </label>
        );

      case "password":
        if (value.length < 5) {
          return "Введите не менее 5 символов";
        }
        return "";

      default: {
        return "";
      }
    }
  };

  handleUserInput = (e) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value),
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    const { fields } = this.state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    if (fields.password && fields.mobile) {
      const data = {
        password: fields.password,
        mobile: fields.mobile,
      };

      window.alert("submit success", JSON.stringify(data));

      this.setState({
        fields: {
          password: "",
          mobile: "",
        },
      });
    }
  };

  render() {
    const { fields, errors } = this.state;

    return (
      <>
        <form className="formAuth" onSubmit={this.handleSubmit}>
          <NumberFormat
            className={
              fields.mobile.length !== 19
                ? "formAuth__inputStyle formAuth__inputStyle--active"
                : "formAuth__inputStyle"
            }
            name="mobile"
            type="tel"
            mask=" . "
            autoComplete="off"
            format="8 ( ### ) ###-##-##"
            value={fields.mobile}
            onChange={(event) => this.handleUserInput(event)}
            placeholder="Номер телефона"
            required
            style={
              fields.mobile.length !== 19 && fields.mobile.length !== 0
                ? {
                    color: "#B40000",
                  }
                : {
                    color: "",
                  }
            }
          />
          {errors.mobile}
          <input
            className={
              errors.password
                ? "formAuth__inputStyle formAuth__inputStyle--active"
                : "formAuth__inputStyle"
            }
            type="password"
            autoComplete="off"
            name="password"
            value={fields.password}
            onChange={(event) => this.handleUserInput(event)}
            placeholder="Пароль"
            required
            style={errors.password ? { color: "black" } : { color: "" }}
          />
          <div className="formAuth__errorsText">{errors.password}</div>
          <div className="formAuth__toggle formAuth__forgotPassword">
            <Suspense fallback={<div>Loading...</div>}>
              <ToggleSwitch />
            </Suspense>
            <a href="https://www.apple.com/">Забыл пароль</a>
          </div>

          <button
            className="formAuth__buttonStyle"
            onClick={this.handleSubmit}
            type="submit"
            disabled={
              fields.password.length === 0 ||
              fields.password.length < 5 ||
              fields.mobile.length > 19 ||
              (errors.password && fields.mobile.length === 0) ||
              (fields.password.length > 0 && fields.mobile.length === 0)
            }
          >
            ВОЙТИ
          </button>
        </form>
      </>
    );
  }
}
export default Form;
