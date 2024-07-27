import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-themes',
		// '@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-storysource',
		'@storybook/addon-console',
		{
			name: '@storybook/addon-essentials',
			options: {
				backgrounds: false,
			},
		},
	],

	// async viteFinal(config, { configType }) {
	// 	// customize the Vite config here
	// 	return {
	// 		...config,
	// 		define: { 'process.env': {} },
	// 		resolve: {
	// 			alias: [
	// 				{
	// 					find: 'ui',
	// 					replacement: resolve(__dirname, '../../../packages/ui/'),
	// 				},
	// 			],
	// 		},
	// 	}
	// },

	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	typescript: {
		// reactDocgenTypescriptOptions: {
		// 	shouldExtractLiteralValuesFromEnum: true,
		// 	propFilter: (prop) => !isCssProperty(prop.name),
		// },
		// reactDocgen: 'react-docgen-typescript',
	},
}

export default config
