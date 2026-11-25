import styles from "./styles.module.css"

export default function FooterLink({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["normal"]} href="./">
        <div className={styles["div-63"]}>
          <p className={styles["p-30"]}>{slots[0] ?? "Home"}</p>
        </div>
      </a>
  )
}
