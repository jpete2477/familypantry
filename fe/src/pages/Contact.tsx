import { ContactForm } from '../components/ContactForm'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './Contact.module.css'

export default function Contact() {
  usePageMeta(
    'Contact',
    "Ready to join the family? Reach out to buy, partner, supply, or just say hello — we'd love to hear from you.",
  )

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.intro}>
        <h1>Join the Family</h1>
        <p>
          Reaching out isn't a sales inquiry — it's the start of a conversation. Whether you want
          to be one of the first to try our products, explore a partnership, become a supplier, or
          just say hello, we'd love to hear from you.
        </p>
      </header>

      <ContactForm />

      <div className={styles.details}>
        <h2>Other ways to reach us</h2>
        <p>123 Homestead Lane, Springfield, USA</p>
        <p>
          <a href="tel:+15555550123">(555) 555-0123</a>
        </p>
        <p>
          <a href="mailto:hello@thefamilypantry.com">hello@thefamilypantry.com</a>
        </p>
      </div>
    </div>
  )
}
