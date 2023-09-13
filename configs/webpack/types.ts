interface IPaths {
	entry: string;
	build: string;
	template: string;
}
type TMode = 'development' | 'production';
interface IBuildOptions {
	mode: TMode;
	paths: IPaths;
	isDev: boolean;
	port: number;
}

interface IEnv {
	MODE: TMode;
	PORT: number;
}

export { IBuildOptions, IPaths, IEnv };
