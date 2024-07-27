import type { Meta, StoryObj } from '@storybook/react'
import { Box, Wrap } from '../styled-system/jsx'

const meta: Meta<typeof Wrap> = {
	component: Wrap,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Wrap
				bgColor='content1'
				rounded='lg'
				shadow={'sm'}
				maxW='350px'
				{...props}
			>
				<Box bg='background' p={2}>
					Test
				</Box>
				<Box bg='background' p={2}>
					Test
				</Box>
				<Box bg='background' p={2}>
					Test
				</Box>
				<Box bg='background' p={2}>
					Test
				</Box>
			</Wrap>
		)
	},
}
