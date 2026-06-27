import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it.each(['neutral', 'primary', 'success', 'warning', 'error', 'info'] as const)(
    'renders the %s variant',
    (variant) => {
      render(<Badge variant={variant}>Badge</Badge>)
      expect(screen.getByText('Badge')).toBeInTheDocument()
    },
  )

  it.each(['sm', 'md'] as const)('renders the %s size', (size) => {
    render(<Badge size={size}>Badge</Badge>)
    expect(screen.getByText('Badge')).toBeInTheDocument()
  })

  it('forwards a ref to the underlying span element', () => {
    const ref = { current: null as HTMLSpanElement | null }
    render(<Badge ref={ref}>Badge</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})
