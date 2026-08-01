import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { CTAButton } from '../components/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'
import { products } from '../data/products'
import { SITE_NAME } from '../lib/siteConfig'
import styles from './Home.module.css'

export default function Home() {
  usePageMeta(
    SITE_NAME,
    'The Family Pantry helps families gather, prepare, and share amazing meals together. Join the family and be part of it from the start.',
  )

  return (
    <>
      <Hero />

      <section className={`container ${styles.section}`}>
        <h2>Why we exist</h2>
        <p>
          People don't buy what you do, they buy why you do it. We believe the real product isn't
          what's in the bottle — it's the table it brings you back to. The Family Pantry exists so
          families can gather together, prepare something delicious, and share it with the people
          they love.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Meet the family</h2>
        <p>Four blends made for the moments you gather around the table.</p>
        <div className={styles.grid}>
          <ProductGrid products={products} variant="compact" />
        </div>
        <div className={styles.ctaRow}>
          <CTAButton to="/products" variant="secondary">
            See All Products
          </CTAButton>
        </div>
      </section>

      <section className={`${styles.sectionAlt} ${styles.ctaSection}`}>
        <h2>Built alongside our family — and yours</h2>
        <p>
          Whether you're joining us as a guest at the table, or as a future partner or supplier,
          we're building The Family Pantry together — one gathering at a time.
        </p>
        <CTAButton to="/contact">Join the Family</CTAButton>
      </section>
    </>
  )
}
