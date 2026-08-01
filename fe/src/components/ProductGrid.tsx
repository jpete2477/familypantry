import type { Product } from '../data/products'
import { ProductCard } from './ProductCard'
import styles from './ProductGrid.module.css'

interface ProductGridProps {
  products: Product[]
  variant?: 'compact' | 'full'
}

export function ProductGrid({ products, variant = 'full' }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} variant={variant} />
      ))}
    </div>
  )
}
