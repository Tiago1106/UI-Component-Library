import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PasswordInput } from './PasswordInput'

describe('PasswordInput', () => {
  it('renders as a password field by default', () => {
    render(<PasswordInput label="Senha" />)
    expect(screen.getByLabelText('Senha')).toHaveAttribute('type', 'password')
  })

  it('toggles visibility when the toggle button is clicked', async () => {
    render(<PasswordInput label="Senha" />)
    const input = screen.getByLabelText('Senha')
    const toggle = screen.getByRole('button', { name: 'Mostrar senha' })

    await userEvent.click(toggle)
    expect(input).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: 'Ocultar senha' })).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Ocultar senha' }))
    expect(input).toHaveAttribute('type', 'password')
  })

  it('does not lose focus on the input when toggling visibility', async () => {
    render(<PasswordInput label="Senha" />)
    const input = screen.getByLabelText('Senha')

    await userEvent.type(input, 'secret')
    await userEvent.click(screen.getByRole('button', { name: 'Mostrar senha' }))

    expect(input).toHaveValue('secret')
  })

  it('forwards a ref to the underlying input element', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<PasswordInput ref={ref} label="Senha" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
