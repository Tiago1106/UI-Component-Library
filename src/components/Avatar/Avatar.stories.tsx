import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    alt: 'Tiago Freitas',
    name: 'Tiago Freitas',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
  },
}

export const Initials: Story = {}

export const FallbackWithoutName: Story = {
  args: { name: undefined, alt: 'Usuário desconhecido' },
}

export const BrokenImageFallsBackToInitials: Story = {
  args: {
    src: 'https://example.com/this-image-does-not-exist.png',
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="xl" />
    </div>
  ),
}
