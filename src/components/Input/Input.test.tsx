import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('associates the label with the input', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('updates the value as the user types', async () => {
    render(<Input label="Email" />)
    const input = screen.getByLabelText('Email')

    await userEvent.type(input, 'hello@example.com')

    expect(input).toHaveValue('hello@example.com')
  })

  it('shows helper text when there is no error', () => {
    render(<Input label="Email" helperText="We never share your email" />)
    expect(screen.getByText('We never share your email')).toBeInTheDocument()
  })

  it('shows the error message, marks aria-invalid and uses role=alert', () => {
    render(<Input label="Email" errorMessage="Email inválido" />)

    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('alert')).toHaveTextContent('Email inválido')
  })

  it('prefers the error message over helper text when both are given', () => {
    render(<Input label="Email" helperText="ajuda" errorMessage="erro" />)
    expect(screen.getByRole('alert')).toHaveTextContent('erro')
  })

  it('does not accept typing when disabled', async () => {
    render(<Input label="Email" disabled />)
    const input = screen.getByLabelText('Email')

    await userEvent.type(input, 'hello')

    expect(input).toHaveValue('')
  })

  it('renders without a label and without helper/error text', () => {
    render(<Input placeholder="No label" />)
    expect(screen.getByPlaceholderText('No label')).toBeInTheDocument()
  })

  it.each(['sm', 'md', 'lg'] as const)('renders the %s size', (size) => {
    render(<Input label="Email" size={size} />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders a decorative icon and adjusts padding, hiding it from assistive tech', () => {
    render(<Input label="Buscar" icon={<svg data-testid="search-icon" />} />)

    const icon = screen.getByTestId('search-icon')
    expect(icon).toBeInTheDocument()
    expect(icon.closest('span')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders an interactive action without aria-hidden', async () => {
    const onActionClick = vi.fn()
    render(
      <Input
        label="Senha"
        action={
          <button type="button" aria-label="Mostrar senha" onClick={onActionClick}>
            👁
          </button>
        }
      />,
    )

    const action = screen.getByRole('button', { name: 'Mostrar senha' })
    expect(action.closest('span')).not.toHaveAttribute('aria-hidden')

    await userEvent.click(action)
    expect(onActionClick).toHaveBeenCalledTimes(1)
  })

  it('prefers action over icon when both are given', () => {
    render(
      <Input
        label="Campo"
        icon={<svg data-testid="icon" />}
        action={<button type="button" data-testid="action" />}
      />,
    )

    expect(screen.getByTestId('action')).toBeInTheDocument()
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
  })

  it('forwards a ref to the underlying input element', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<Input ref={ref} label="Email" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
