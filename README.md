# React-Pulse

A react component that sends out a timed function call at specified intervals when pressed.

React-Pulse is a button component with an inactive and active state. When the button has been clicked and is in the active state, the component makes a function call at timed intervals.

The general use case, is if you need a way for your users to start and stop a recording on your website.

Installation
-----

Once the project is complete, it will be added to npm.

Currently, you can download the files from GitHub and load them into your project using
```
npm link react-pulse
```

Dependencies
-----
- React.JS

Usage
-----

```
import Pulse from 'react-pulse'

<Pulse
	pulseTime={5} // In Seconds
	pulseFunction={this.returnFunction}
/>
```

Component Props
-----

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `defaultLabel` | string | "Start" | Button text label when the state is inactive. |
| `activeLabel` | string | "Running..." | Button text label when the state is active. |
| `defaultActive` | boolean | false| Boolean to specify whether the default state of the button when rendered is active or inactive. |
| `pulseFunction` | function | undefined | The function that is called when the state is active. |
| `pulseTime` | number | 30 | When the button state is active, the pulseTime is how frequently the function 'pulseFunction' should be called. PulseTime is measured in seconds. |
| `onClickFunction` | function | undefined | Function that is called when the button is clicked. |
| `onChangeFunction` | function | undefined | Function that is called when the state of the button changes. |
| `disabled` | boolean | false | Boolean to control whether the button is disabled and cannot be clicked. |
| `className` | string | undefined | String for specifying custom css classes to style the button. |