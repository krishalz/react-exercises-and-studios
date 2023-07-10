import styles from "./ChoresList.module.css";
export default function ChoresList() {
  return (
    <div className={styles.choresText}>
      <h1 className={styles.choresHeading}>My Daily Chore</h1>
      <p>Scoop the cat boxes!</p>
    </div>
  );
}
