import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, _errorInfo: React.ErrorInfo) {
        console.error('Unhandled error:', error, _errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        padding: '24px',
                        height: '100%',
                        width: '100%',
                        color: 'blueviolet',
                        backgroundImage: `url(https://kowoj.mecuate.org/oso/pub/img/caballo/landing.jpg)`,
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                    }}
                >
                    <a href="/">regresar</a>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
