import type { ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './CTAButton.module.css'

interface CTAButtonProps {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function CTAButton({ to, children, variant = 'primary' }: CTAButtonProps) {
  const variantClass = variant === 'secondary' ? styles.secondary : styles.primary
  return (
    <Link to={to} className={`${styles.button} ${variantClass}`}>
      {children}
    </Link>
  )
}
