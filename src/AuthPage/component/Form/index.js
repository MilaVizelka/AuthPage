import React from "react";
import { ReactComponent as Success } from "./assets/success.svg";
import { ReactComponent as Alert } from "./assets/alert.svg";
import NumberFormat from "react-number-format";
import "./index.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
      },
      errors: {
        firstName: "",
        email: "",
        password: "",
        mobile: "",
        confirmPassword: "",
      },
    };
  }

  validate = (name, value) => {
    switch (name) {
      case "mobile":
        console.log(value.length);
        if (value.length > 17 || value.length === 0) {
          return (
            <label style={{ position: "absolute", right: "10px", top: "20px" }}>
              <Alert />
            </label>
          );
        } else {
          return (
            <label style={{ position: "absolute", right: "10px", top: "20px" }}>
              <Success />
            </label>
          );
        }

      case "password":
        if (!value) {
          return "Password is Required";
        } else if (value.length < 8 || value.length > 15) {
          return "Please fill at least 8 character";
        } else if (!value.match(/[a-z]/g)) {
          return "Please enter at least lower character.";
        } else if (!value.match(/[A-Z]/g)) {
          return "Please enter at least upper character.";
        } else if (!value.match(/[0-9]/g)) {
          return "Please enter at least one digit.";
        } else {
          return "";
        }

      default: {
        return "";
      }
    }
  };
  setMask(event) {
    let mask = this.state.maskValues[event.target.type];
    this.setState({ mask });
  }

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
      window.alert("subit success", JSON.stringify(data));
      console.log("----data----", data);
    }
  };

  render() {
    // const success = "/success.svg";
    // const alert = "/alert.svg";
    const { fields, errors } = this.state;
    const mask = this.state.mask;
    return (
      <div>
        <div className="border">
          <div>
            <div>
              <NumberFormat
                name="mobile"
                // allowEmptyFormatting
                mask=" _ "
                autocomplete="off"
                format="+7 (###) ###-####"
                autoFocus={errors.mobile}
                value={fields.mobile}
                onChange={(event) => this.handleUserInput(event)}
                placeholder="mobile"
                style={
                  fields.mobile.length > 17 && fields.mobile.length > 0
                    ? {
                        color: "red",
                        backgroundColor: "white",
                      }
                    : {
                        color: "white",
                      }
                }
              />
              {errors.mobile}
            </div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="Password"
              autocomplete="off"
              name="password"
              value={fields.password}
              onChange={(event) => this.handleUserInput(event)}
              placeholder="Password"
              style={
                errors.password
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "transparent" }
              }
            />
            <div>
              <span className="text-danger">{errors.password}</span>
            </div>
          </div>
        </div>
        <br />
        <button
          type="button"
          className="login-button pointer"
          onClick={this.handleSubmit}
          disabled={
            fields.password.length === 0 ||
            (errors.password && fields.mobile.length >= 0) ||
            (fields.password.length > 0 && fields.mobile.length < 10)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Form;
