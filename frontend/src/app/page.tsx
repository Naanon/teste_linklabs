import Navbar from './components/Navbar'
import Options from './components/Options'
import Products from './components/Products'

import styles from './styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.backgroundColorBlue}>
        <Navbar />
        <Options />
        <div className={styles.containerProducts}>
          <h1>Produtos</h1>
          <div className={styles.cards}>
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </div>
    </>
  )
}
