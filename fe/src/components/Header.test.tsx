import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the primary navigation and CTA', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /the family pantry — home/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /join the family/i }).length).toBeGreaterThan(0)
  })
})
