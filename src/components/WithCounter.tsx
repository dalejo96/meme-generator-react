import { render } from "@testing-library/react";
import * as React from "react";
import { useState } from "react";

export interface InjectedCounterProps {
  count: number;
  incrementCount: () => void;
}

function withCounter<P extends InjectedCounterProps>(
  WrapperComponent: React.ComponentType<P>
): React.ComponentType<P> {
  return (props) => {
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

  /* class WithCounter extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <WrapperComponent
          {...(this.props as P)}
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  } */
}

export default withCounter;
