import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps extends PropsWithChildren {
	element?: HTMLElement;
}
const Portal: FC<IPortalProps> = ({
	children,
	element = document.getElementById('app'),
}) => {
	const [domReady, setDomReady] = useState(false);

	useEffect(() => {
		setDomReady(true);
	}, []);

	const container = element || document.body;

	return domReady ? createPortal(children, container) : null;
};

export default Portal;
