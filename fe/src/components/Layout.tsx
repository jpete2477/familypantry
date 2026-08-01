import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
