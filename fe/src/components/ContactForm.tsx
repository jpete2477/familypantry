import { useState, type FormEvent } from 'react'
import { API_BASE_URL } from '../lib/siteConfig'
import styles from './ContactForm.module.css'

interface ContactFormData {
  name: string
  email: string
  interest: 'buying' | 'partnering' | 'supplying' | 'hello'
  message: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  interest: 'hello',
  message: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    try {
      await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      // Best-effort for this MVP: the invitation still "lands" for the visitor
      // even if the backend is unreachable.
      console.error('Could not reach the backend', error)
    } finally {
      setSubmitting(false)
      setSubmitted(true)
      setFormData(initialFormData)
    }
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <p>Thanks for reaching out — you're part of the family now. We'll be in touch soon.</p>
        <button type="button" className={styles.again} onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Name (required)</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email (required)</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="interest">I'm interested in (required)</label>
        <select
          id="interest"
          name="interest"
          required
          value={formData.interest}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              interest: event.target.value as ContactFormData['interest'],
            }))
          }
        >
          <option value="buying">Buying</option>
          <option value="partnering">Partnering</option>
          <option value="supplying">Supplying</option>
          <option value="hello">Just saying hello</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message (required)</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
        />
      </div>

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? 'Sending…' : 'Join the Family'}
      </button>
    </form>
  )
}
