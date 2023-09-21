import { useState } from 'react';
import cls from './style.module.scss';
import { addProperties } from 'shared/lib/addProperties';
import { Button } from 'shared/ui/Button';
import { ThemePicker } from 'widgets/ThemePicker';

export function Sidebar() {
	const [isClosed, setIsClosed] = useState(false);

	const onToggleSidebar = () => {
		setIsClosed(prev => !prev);
	};

	return (
		<div className={addProperties([cls.sidebar], { [cls.closed]: isClosed })}>
			<Button onClick={onToggleSidebar}>toggle</Button>
			<div className={cls.switchers}>
				<ThemePicker />
			</div>
		</div>
	);
}
