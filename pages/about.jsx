import Image from "next/image";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui fuga sunt
        quia saepe provident molestiae, ab enim aperiam id amet obcaecati
        pariatur officia nesciunt labore quasi. Neque aut adipisci porro.
      </p>
      <Image
        src="/images/charizard.png"
        height={400}
        width={400}
        alt="Charizard"
      />
    </div>
  );
}
