import React, { ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface IErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<
	PropsWithChildren,
	IErrorBoundaryState
> {
	constructor(props: PropsWithChildren) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): IErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo): void {
		console.error(error, info.componentStack);
	}

	render(): ReactNode {
		const { hasError } = this.state;

		if (hasError) {
			return <PageError />;
		}

		return this.props.children;
	}
}
