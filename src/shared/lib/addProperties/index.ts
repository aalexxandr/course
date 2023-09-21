export const addProperties = (
	properties: Array<string>,
	booProperties: Record<string, boolean> = {}
): string =>
	[
		...properties.filter(Boolean),
		Object.entries(booProperties)
			.filter(([key, value]) => Boolean(value))
			.map(([property]) => property),
	].join(' ');
