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
    if (!this.state.active) {
      this.props.onClickFunction;
    } else {
      this.props.onClickFunction;
    }

    this.setState({
      active: this.state.active ? false : true,
    });

    // Send function when the state changes
    this.props.onChangeFunction;
  }

  render() {
    const { active } = this.state;
    const { defaultLabel, activeLabel, className, disabled } = this.props;

    return <button className={className} onClick={this.preparePulse} disabled={disabled}>
      {active ? activeLabel : defaultLabel }
    </button>
  }
}

Pulse.defaultProps = {
  defaultLabel: "Start",
  activeLabel: "Running...",
  pulseTime: 30,
  showTimer: false,
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
  showTimer: PropTypes.bool,
};

export default Pulse;
