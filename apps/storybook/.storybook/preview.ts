import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'

import './index.css'

const preview: Preview = {
	parameters: {
		layout: 'centered',
		options: {
			storySort: {
				order: [
					'Intro',
					['Changelog'],
					// 'Patterns',
					// 'Layout',
					// 'Inputs',
					// 'Data Display',
					// 'Feedback',
					// 'Typography',
					// 'Overlay',
					// 'Disclosure',
					// 'Navigation',
					// 'Media and icons',
					// 'Maps',
				],
			},
		},
		actions: {},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		viewport: {
			viewports: {
				sm: {
					name: 'SM',
					styles: {
						width: '375px',
						height: '800px',
						border: 'none',
						borderRadius: '0',
					},
					type: 'mobile',
				},
				md: {
					name: 'MD',
					styles: {
						width: '768px',
						height: '680px',
						border: 'none',
						borderRadius: '0',
					},
					type: 'tablet',
				},
				lg: {
					name: 'LG',
					styles: {
						width: '1280px',
						height: '100%',
						border: 'none',
						borderRadius: '0',
					},
					type: 'desktop',
				},
			},
		},
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
		}),
	],
}

export default preview
