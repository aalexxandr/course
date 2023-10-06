import { ETheme } from 'app/providers/ThemeProvider';
import { ComponentType } from 'react';
import { addProperties } from 'shared/lib/addProperties';

export const ThemeDecorator =
	(theme: ETheme) =>
	(Story: ComponentType): JSX.Element => (
		<div className={addProperties(['app', theme])} id='app'>
			<Story />
		</div>
	);
