import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {
  args: { variant: 'neutral' },
}

export const Primary: Story = {
  args: { variant: 'primary' },
}

export const Success: Story = {
  args: { variant: 'success' },
}

export const Warning: Story = {
  args: { variant: 'warning' },
}

export const Error: Story = {
  args: { variant: 'error' },
}

export const Info: Story = {
  args: { variant: 'info' },
}

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} variant="neutral" />
      <Badge {...args} variant="primary" />
      <Badge {...args} variant="success" />
      <Badge {...args} variant="warning" />
      <Badge {...args} variant="error" />
      <Badge {...args} variant="info" />
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    size: 'md',
  },

  render: (args) => (
    <div className="flex items-center gap-2">
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
    </div>
  ),
}
