import type { Meta, StoryObj } from '@storybook/react-vite'
import { PasswordInput } from './PasswordInput'

const meta = {
  title: 'Components/Input/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  args: {
    label: 'Senha',
    placeholder: '••••••••',
  },
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: { errorMessage: 'A senha precisa ter ao menos 8 caracteres.', defaultValue: '123' },
}
