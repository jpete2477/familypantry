import { CTAButton } from '../components/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './NotFound.module.css'

export default function NotFound() {
  usePageMeta('Page Not Found', "We couldn't find the page you were looking for.")

  return (
    <div className={`container ${styles.page}`}>
      <h1>We couldn't find that page</h1>
      <p>
        The page you're looking for may have moved. Let's get you back to the table.
      </p>
      <CTAButton to="/">Back to Home</CTAButton>
    </div>
  )
}
