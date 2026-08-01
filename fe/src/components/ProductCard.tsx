import { Link } from 'react-router'
import type { Product } from '../data/products'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  variant?: 'compact' | 'full'
}

export function ProductCard({ product, variant = 'full' }: ProductCardProps) {
  return (
    <article className={`${styles.card} ${variant === 'compact' ? styles.compact : ''}`}>
      <Link to={`/products/${product.slug}`} className={styles.imageLink} tabIndex={-1}>
        <img src={product.bottleImage} alt={product.bottleImageAlt} className={styles.image} />
      </Link>
      <h3 className={styles.name}>
        <Link to={`/products/${product.slug}`}>{product.name}</Link>
      </h3>
      <p className={styles.benefit}>{product.benefit}</p>
      <Link to={`/products/${product.slug}`} className={styles.link}>
        View Product
      </Link>
    </article>
  )
}
