import React from "react";
import PropTypes from "prop-types";
import style from "./styles.css";

class Pulse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.preparePulse = this.preparePulse.bind(this);
    this.sendPulse = this.sendPulse.bind(this);
    this.stopPulse = this.stopPulse.bind(this);
  }

  componentWillMount() {
    this.setState({
      active: this.props.defaultActive == true ? true : false,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.defaultActive == true ? true : false,
    });
  }

  preparePulse() {
    const date = new Date();

    // Send function when the state changes
    this.props.onClickFunction;

    if (!this.state.active) {
      this.props.onChangeFunction;
    } else {
      this.props.onChangeFunction;
    }

    this.setState({
      active: this.state.active ? false : true,
    });
  }

  sendPulse() {
    global.pulse = setInterval(() => this.props.pulseFunction, (this.props.pulseTime * 1000));
  }

  stopPulse() {
    clearInterval(global.pulse);
  }

  render() {
    const { active } = this.state;
    const { defaultLabel, activeLabel, className, disabled } = this.props;

    active ? this.sendPulse() : this.stopPulse(); // When state is active, call function

    return <button className={className} onClick={this.preparePulse} disabled={disabled}>
      {active ? activeLabel : defaultLabel }
    </button>
  }
}

Pulse.defaultProps = {
  defaultLabel: "Start",
  activeLabel: "Running...",
  pulseTime: 30,
  disabled: false
};

Pulse.propTypes = {
  defaultLabel: PropTypes.string,
  activeLabel: PropTypes.string,
  defaultActive: PropTypes.bool,
  pulseFunction: PropTypes.func,
  pulseTime: PropTypes.number, // Seconds
  onClickFunction: PropTypes.func,
  onChangeFunction: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Pulse;
