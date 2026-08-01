import { Link, useParams } from 'react-router'
import { CTAButton } from '../components/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'
import { getProductBySlug } from '../data/products'
import NotFound from './NotFound'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug)

  usePageMeta(
    product ? product.name : 'Product Not Found',
    product ? product.benefit : 'This product could not be found.',
  )

  if (!product) {
    return <NotFound />
  }

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.grid}>
        <div className={styles.images}>
          <img src={product.bottleImage} alt={product.bottleImageAlt} className={styles.bottle} />
          <img
            src={product.lifestyleImage}
            alt={product.lifestyleImageAlt}
            className={styles.lifestyle}
          />
        </div>

        <div className={styles.details}>
          <h1>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price}</p>

          <button type="button" className={styles.addToCart} disabled>
            Add to Cart
          </button>
          <p className={styles.comingSoon}>
            Coming soon — <Link to="/contact">Join the Family to be notified</Link> when it's
            ready to ship.
          </p>

          <div className={styles.ctaRow}>
            <CTAButton to="/contact">Join the Family</CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
