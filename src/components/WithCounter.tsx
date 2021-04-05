import * as React from "react";
import { useState } from "react";

export interface InjectedCounterProps {
  count?: number;
  incrementCount?(): void;
}

function withCounter<P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <Component {...props} count={count} incrementCount={incrementCount} />
    );
  };
}
export default withCounter;
