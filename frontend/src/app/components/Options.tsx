import Image from 'next/image'

import ErlenmeyerIcon from "../../../public/icons/erlenmeyer-icon.png"
import BottleIcon1 from "../../../public/icons/bottle-icon-1.png"
import BottleIcon2 from "../../../public/icons/bottle-icon-2.png"


import styles from '../styles/components/Options.module.scss'

export default function Options() {
  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        style={{
          backgroundColor: styles.backgroundColorWhite,
          height: '509px',
          color: styles.fontColor,
          padding: '65px 60px'
        }}
      >
        <span>PRODUTOS</span>
        <div>
          <Image
            alt="Erlenmeyer"
            src={ErlenmeyerIcon}
            width={32}
            height={32}
          />
          <h1>Vidrarias e Equipamentos</h1>
        </div>
      </div>
      <div
        className={styles.card}
        style={{
          backgroundColor: styles.backgroundColorOrange,
          height: '541px',
          color: 'white',
          padding: '65px 60px 97px'
        }}
      >
        <span>QUÍMICOS</span>
        <div>
          <Image
            alt="Bottle"
            src={BottleIcon1}
            width={16}
            height={36}
          />
          <Image
            alt="Bottle"
            src={BottleIcon2}
            width={8.89}
            height={20}
          />
          <h1>Materiais<br />Químicos</h1>
        </div>
      </div>
      <div
        className={styles.card}
        style={{
          backgroundColor: styles.backgroundColorWhite,
          height: '509px',
          color: styles.fontColor,
          padding: '65px 60px'
        }}
      >
        <span>LABORATÓRIOS</span>
        <h1>Ferramentas e<br />Utensílios</h1>
      </div>
    </div>
  )
}