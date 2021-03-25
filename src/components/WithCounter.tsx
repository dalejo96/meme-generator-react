import { render } from "@testing-library/react";
import * as React from "react";
import { useState } from "react";

interface IProps {}

interface IState {
  count: number;
}

export interface InjectedCounterProps {
  count: number;
  incrementCount: () => void;
}

//const withCounter = (WrapperComponent: React.ComponentType<P>) => {
const withCounter = <P extends InjectedCounterProps>(
  WrapperComponent: React.ComponentType<P>
) => {
  const WithCounter = (props: IProps): React.ReactElement => {
    const [count, setCount] = useState<number>(0);

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

  return WithCounter;
};

export default withCounter;
