interface IPaths {
	entry: string;
	build: string;
	template: string;
}

interface IBuildOptions {
	mode: 'development' | 'production';
	paths: IPaths;
}

export { IBuildOptions, IPaths };
