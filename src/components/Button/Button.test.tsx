import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>,
    )

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('shows a spinner, marks aria-busy and ignores clicks when loading', async () => {
    const onClick = vi.fn()
    render(
      <Button loading onClick={onClick}>
        Saving
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'Saving' })
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByTestId('button-spinner')).toBeInTheDocument()

    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it.each(['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const)(
    'renders the %s variant',
    (variant) => {
      render(<Button variant={variant}>Button</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    },
  )

  it.each(['sm', 'md', 'lg'] as const)('renders the %s size', (size) => {
    render(<Button size={size}>Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders icon-only with an accessible label and no visible text', () => {
    render(
      <Button iconOnly aria-label="Excluir">
        <svg aria-hidden="true" data-testid="trash-icon" />
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'Excluir' })
    expect(button).toBeInTheDocument()
    expect(screen.getByTestId('trash-icon')).toBeInTheDocument()
  })

  it('forwards a ref to the underlying button element', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Button ref={ref}>Button</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
