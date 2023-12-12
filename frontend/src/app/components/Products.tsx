import Image from 'next/image'

import Product1 from '../../../public/product-1.svg'

import styles from '../styles/components/Products.module.scss'

export default function Products() {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <Image
          alt="Product1"
          src={Product1}
          width={319}
          height={151}
        />
        <div className={styles.informations}>
          <div>
            <p className={styles.productName}>Produto 1</p>
            <p className={styles.note}>Nota: 9.0</p>
          </div>
          <p className={styles.value}>R$ 200,00</p>
        </div>
      </div>
    </div>
  )
}