import React, { Component } from 'react';


class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

    componentDidCatch(error, errorInfo) { // catches if there is an error (react builtin function)
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) { // if error
            return <p>Ooops, that is not good</p>
        }
        
        return this.props.children // if no error
    }

}

export default ErrorBoundary;