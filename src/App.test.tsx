import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the library heading', () => {
    render(<App />)
    expect(screen.getByText('UI Component Library')).toBeInTheDocument()
  })
})
