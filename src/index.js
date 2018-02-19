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
      active: this.props.defaultActive ? "false" : "true",
    });
  }

  componentWillReceiveProps(nextProps) {
  }

  preparePulse() {
    this.setState({
      active: this.state.active ? "false" : "true",
    });
  }

  render() {
    const { active } = this.state;
    const { defaultLabel, activeLabel, className } = this.props;

    return <button className={className} onClick={this.preparePulse}>
      {active ? activeLabel : defaultLabel }
    </button>
  }
}

Pulse.defaultProps = {
  defaultLabel: "Start",
  activeLabel: "Running",
  pulseTime: 30,
  showTimer: false,
  disabled: false
};

Pulse.propTypes = {
  defaultLabel: Proptypes.string,
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
