import { ProductGrid } from '../components/ProductGrid'
import { CTAButton } from '../components/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'
import { products } from '../data/products'
import styles from './Products.module.css'

export default function Products() {
  usePageMeta(
    'Our Products',
    "Explore The Family Pantry's family of products — Family Taco Night, Back Porch Ranch, Backyard Steak, and Kitchen Essential — made to bring your family to the table.",
  )

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.intro}>
        <h1>Our Products</h1>
        <p>
          Every blend we make starts with the same question: what will help you get everyone back
          to the table? Here's the family so far.
        </p>
      </header>

      <ProductGrid products={products} variant="full" />

      <div className={styles.ctaRow}>
        <h2>Ready to join the family?</h2>
        <CTAButton to="/contact">Join the Family</CTAButton>
      </div>
    </div>
  )
}
