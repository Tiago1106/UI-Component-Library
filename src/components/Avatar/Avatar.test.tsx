import { render, screen, fireEvent } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders an image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.png" alt="Tiago Freitas" />)
    expect(screen.getByRole('img', { name: 'Tiago Freitas' })).toHaveAttribute(
      'src',
      'https://example.com/avatar.png',
    )
  })

  it('renders initials from name when there is no src', () => {
    render(<Avatar alt="Tiago Freitas" name="Tiago Freitas" />)
    expect(screen.getByText('TF')).toBeInTheDocument()
  })

  it('renders a fallback "?" when there is neither src nor name', () => {
    render(<Avatar alt="Usuário desconhecido" />)
    expect(screen.getByText('?')).toBeInTheDocument()
  })

  it('renders a fallback "?" when name only contains whitespace', () => {
    render(<Avatar alt="Usuário desconhecido" name="   " />)
    expect(screen.getByText('?')).toBeInTheDocument()
  })

  it('falls back to initials when the image fails to load', () => {
    render(<Avatar src="https://example.com/broken.png" alt="Tiago Freitas" name="Tiago Freitas" />)

    const img = screen.getByRole('img', { name: 'Tiago Freitas' })
    fireEvent.error(img)

    expect(screen.getByText('TF')).toBeInTheDocument()
  })

  it.each(['sm', 'md', 'lg', 'xl'] as const)('renders the %s size', (size) => {
    render(<Avatar alt="Tiago Freitas" name="Tiago Freitas" size={size} />)
    expect(screen.getByText('TF')).toBeInTheDocument()
  })

  it('forwards a ref to the underlying span element', () => {
    const ref = { current: null as HTMLSpanElement | null }
    render(<Avatar ref={ref} alt="Tiago Freitas" name="Tiago Freitas" />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})
