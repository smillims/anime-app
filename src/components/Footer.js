import styles from '../css/style.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <p class={styles.githubProfile}>
        <a class={styles.githubProfileLink} href="https://github.com/smillims">
          GitHub Profile Author's
        </a>
      </p>
      <p class={styles.email}>If you have any recommendations: danil.liashchenko.uk@gmail.com</p>
    </footer>
  );
}
