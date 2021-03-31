import * as React from "react";
import { Subtract } from "utility-types";

export interface InjectedCounterProps {
  count: number;
  incrementCount: () => void;
}

interface MakeCounterState {
  value: number;
}

const withCounter = <P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
) =>
  class MakeCounter extends React.Component<
    Subtract<P, InjectedCounterProps>,
    MakeCounterState
  > {
    state: MakeCounterState = {
      value: 0,
    };

    increment = () => {
      this.setState((prevState) => ({
        value: prevState.value + 1,
      }));
    };

    render() {
      const { ...props } = this.props;
      return (
        <Component
          {...(props as P)}
          count={this.state.value}
          incrementCount={this.increment}
        />
      );
    }
  };

/* export interface InjectedCounterProps {
  count: number;
  incrementCount: () => void;
}

function withCounter<P extends InjectedCounterProps>(
  WrapperComponent: React.ComponentType<P>
) {
  return (props: P) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <WrapperComponent
        {...props}
        count={count}
        incrementCount={incrementCount}
      />
    );
  };
} */

/* function withCounter<P extends InjectedCounterProps>(
  WrapperComponent: React.ComponentType<P>
): React.ComponentType<P> {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <WrapperComponent
        {...(props as P)}
        count={count}
        incrementCount={incrementCount}
      />
    );
  };
}*/

export default withCounter;
