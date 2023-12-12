import Image from "next/image";

import Logo from "../../../public/logo.svg"
import BudgetIcon from "../../../public/icons/budget-icon.png"

import styles from '../styles/components/Navbar.module.scss'
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.div}>
      <nav className={styles.nav}>
        <Image
          alt="Logo"
          src={Logo}
          style={{ width: 'auto', height: 'auto' }}
        />
        <ul className={styles.ul}>
          <li className={styles.li}><Link href="">Início</Link></li>
          <li className={styles.liProducts}><Link href="">Produtos</Link></li>
          <li className={styles.li}><Link href="">Laudos</Link></li>
          <li className={styles.li}><Link href="">Sobre Nós</Link></li>
          <li className={styles.li}><Link href="">Certificações</Link></li>
          <li className={styles.li}><Link href="">Contato</Link></li>
        </ul>
        <button className={styles.button}>
          <Image
            className={styles.img}
            alt="Budget Icon"
            src={BudgetIcon}
            style={{ width: 'auto', height: 'auto' }}
          />
          Orçamento
        </button>
      </nav>
    </div>
  )
}