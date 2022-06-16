import Image from "next/image";
import Link from "next/link";

import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokebola.png"
          width={30}
          height={30}
          alt="PokeNext"
        />

        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
