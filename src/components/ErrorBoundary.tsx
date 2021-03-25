import React from "react";

interface ErrorBoundaryProps {
  hasError: boolean;
  error: string;
}
interface IProps {}
export default class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryProps
> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error: { toString: () => any }) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h2>App Crashed</h2>
          <p>Something has went horribly wrong.</p>
          {this.state.error}
        </>
      );
    }

    // If there is no error just render the children component.
    return this.props.children;
  }
}
