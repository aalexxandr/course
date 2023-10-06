import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps extends PropsWithChildren {
	element?: HTMLElement;
}
const Portal: FC<IPortalProps> = ({
	children,
	element = document.getElementById('app')!,
}) => {
	const [domReady, setDomReady] = useState(false);

	useEffect(() => {
		setDomReady(true);
	}, []);

	return domReady ? createPortal(children, element) : null;
};

export default Portal;
