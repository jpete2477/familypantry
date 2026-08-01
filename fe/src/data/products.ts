export interface Product {
  slug: string
  name: string
  benefit: string
  description: string
  price: string
  bottleImage: string
  bottleImageAlt: string
  lifestyleImage: string
  lifestyleImageAlt: string
}

export const products: Product[] = [
  {
    slug: 'family-taco-night',
    name: 'Family Taco Night',
    benefit: 'Turns any weeknight into a table full of laughter and shared plates.',
    description:
      'Our Family Taco Night seasoning blend is made for the night everyone actually shows up to the table — a warm, gently spiced mix that turns a simple weeknight dinner into a shared tradition, one taco at a time.',
    price: '$12.99',
    bottleImage: '/images/product-family-taco-night.svg',
    bottleImageAlt:
      'Square glass bottle of Family Taco Night seasoning with a natural wood lid',
    lifestyleImage: '/images/lifestyle-family-taco-night.svg',
    lifestyleImageAlt: 'A family sharing taco night together at the dinner table',
  },
  {
    slug: 'back-porch-ranch',
    name: 'Back Porch (Homestyle) Ranch',
    benefit: 'Brings porch-side comfort to whatever you set on the table.',
    description:
      'Back Porch Ranch is our homestyle take on the dressing everyone reaches for twice — cool, herby, and made to sit in the middle of the table while the conversation runs long.',
    price: '$9.99',
    bottleImage: '/images/product-back-porch-ranch.svg',
    bottleImageAlt:
      'Square glass bottle of Back Porch Homestyle Ranch with a natural wood lid',
    lifestyleImage: '/images/lifestyle-back-porch-ranch.svg',
    lifestyleImageAlt: 'Family enjoying a meal together with Back Porch Ranch on the table',
  },
  {
    slug: 'backyard-steak',
    name: 'Backyard Steak',
    benefit: 'Made for the weekend cookout everyone gathers around.',
    description:
      'Backyard Steak seasoning is built for the grill and the crowd that gathers around it — a bold, smoky blend for the meals that turn into an afternoon.',
    price: '$13.99',
    bottleImage: '/images/product-backyard-steak.svg',
    bottleImageAlt: 'Square glass bottle of Backyard Steak seasoning with a natural wood lid',
    lifestyleImage: '/images/lifestyle-backyard-steak.svg',
    lifestyleImageAlt: 'Family gathered around a backyard grill sharing steak together',
  },
  {
    slug: 'kitchen-essential',
    name: 'Kitchen Essential',
    benefit: 'The everyday blend that belongs in every family pantry.',
    description:
      'Kitchen Essential is the all-purpose seasoning we reach for every single day — the quiet workhorse behind most of the meals that bring our family to the table.',
    price: '$8.99',
    bottleImage: '/images/product-kitchen-essential.svg',
    bottleImageAlt: 'Square glass bottle of Kitchen Essential seasoning with a natural wood lid',
    lifestyleImage: '/images/lifestyle-kitchen-essential.svg',
    lifestyleImageAlt: 'A family cooking together in the kitchen using Kitchen Essential seasoning',
  },
]

export function getProductBySlug(slug: string | undefined): Product | undefined {
  return products.find((product) => product.slug === slug)
}
