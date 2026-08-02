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
        <p>
          Some nights it was just the two of us and a skillet. Other nights the table stretched
          and the kitchen got loud in the best way. Over the years we collected the flavors and
          shortcuts that made those moments easier — and better. This is that pantry, opened up.
        </p>
        <CTAButton to="/contact" variant="secondary">
          Come sit with us
        </CTAButton>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>A few of the things we reach for when the table is filling up.</h2>
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
        <h2>There's a place for you here.</h2>
        <p>
          We've always believed the best meals aren't about perfection. They're about who's in
          the chairs.
        </p>
        <CTAButton to="/contact">Join the Family</CTAButton>
      </section>
    </>
  )
}
