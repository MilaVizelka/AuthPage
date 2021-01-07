import React from "react";
import "./index.scss";

class ToggleSwitch extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false,
    };

    this.onToggleSwitchChange = this.onToggleSwitchChange.bind(this);
  }

  onToggleSwitchChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div className="toggleSwitch toggleSwitch__rounded">
        <div className="toggleSwitch__wrapper">
          <div
            className={`Slider ${this.state.checked && "isChecked"}`}
            onClick={this.onToggleSwitchChange}
          ></div>
          <p style={{ marginLeft: "5px" }}>Запомнить</p>
        </div>
      </div>
    );
  }
}
export default ToggleSwitch;
