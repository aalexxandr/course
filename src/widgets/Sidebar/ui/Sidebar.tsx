import { useState } from 'react';
import cls from './style.module.scss';
import { addProperties } from 'shared/lib/addProperties';
import { Button } from 'shared/ui/Button';
import { ThemePicker } from 'widgets/ThemePicker';
import { LanguagePicker } from 'widgets/LanguagePicker';

export const Sidebar = (): JSX.Element => {
	const [isClosed, setIsClosed] = useState(false);

	const onToggleSidebar = (): void => {
		setIsClosed(prev => !prev);
	};

	return (
		<div className={
			addProperties([cls.sidebar], { [cls.closed]: isClosed })
		}>
			<Button onClick={onToggleSidebar} className='text'>toggle</Button>
			<div className={cls.switchers}>
				<ThemePicker />
				<LanguagePicker />
			</div>
		</div>
	);
};
