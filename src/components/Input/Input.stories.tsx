import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithHelperText: Story = {
  args: { helperText: 'Nunca compartilhamos seu email.' },
}

export const WithError: Story = {
  args: { errorMessage: 'Email inválido.', defaultValue: 'not-an-email' },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'you@example.com' },
}

const SearchIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
  </svg>
)

export const WithIcon: Story = {
  args: { icon: <SearchIcon />, label: 'Buscar', placeholder: 'Buscar...' },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} size="sm" label="Small" />
      <Input {...args} size="md" label="Medium" />
      <Input {...args} size="lg" label="Large" />
    </div>
  ),
}
