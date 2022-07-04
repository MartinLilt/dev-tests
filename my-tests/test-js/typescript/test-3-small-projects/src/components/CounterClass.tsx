import { Component } from 'react';

interface Props {
  initialState: number;
  step: number;
}

interface State {
  value: number;
}

export default class CounterClass extends Component<Props, State> {
  static defaultProps = {
    initialState: 0,
    step: 1,
  };

  state = {
    value: this.props.initialState,
  };

  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  decrement = () => this.setState(({ value }) => ({ value: value - 1 }));

  render() {
    const { value } = this.state;
    const { step } = this.props;

    return (
      <div>
        <span>{value}</span>
        <div>
          <button type="button" onClick={this.increment}>
            +{step}
          </button>
          <button type="button" onClick={this.decrement}>
            -{step}
          </button>
        </div>
      </div>
    );
  }
}
