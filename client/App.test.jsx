// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// TODO: learn how to polyfill fetch in vitest
vi.mock('./FetchFruit')

describe('<App />', () => {
  it('renders', () => {
    render(<App />)
    expect(screen.getByText(/dev/i)).toBeInTheDocument()
  })
  it('increments count correctly', async () => {
    render(<App />)
    expect(screen.getByText(/0/i)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })
})
