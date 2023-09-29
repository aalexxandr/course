export const addProperties = (
	properties: Array<string | undefined>,
	booProperties: Record<string, boolean> = {}
): string =>
	[
		...properties.filter(Boolean),
		...Object.entries(booProperties)
			.filter(([, value]) => Boolean(value))
			.map(([property]) => property),
	].join(' ');
