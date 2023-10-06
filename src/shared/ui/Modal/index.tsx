import {
	FC,
	PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import cls from './style.module.scss';
import { addProperties } from 'shared/lib/addProperties';
import { MouseEvent } from 'react';
import Portal from '../Portal';

interface IModal extends PropsWithChildren {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

const stopPropagation = (event: MouseEvent<HTMLDivElement>): void => {
	event.stopPropagation();
};

const CLOSING_DELAY = 100;

const Modal: FC<IModal> = ({
	children,
	className,
	isOpen,
	onClose,
}: IModal): JSX.Element => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const onCloseWithTimer = useCallback(() => {
		setIsClosing(true);
		timerRef.current = setTimeout(() => {
			onClose();
			setIsClosing(false);
		}, CLOSING_DELAY);
	}, [timerRef, onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onCloseWithTimer();
			}
		},
		[onCloseWithTimer]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	return (
		<Portal>
			<div
				className={addProperties([cls.Modal, className], {
					[cls.open]: isOpen,
					[cls.closing]: isClosing,
				})}
			>
				<div className={cls.overlay} onClick={onCloseWithTimer}>
					<div className={cls.content} onClick={stopPropagation}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
