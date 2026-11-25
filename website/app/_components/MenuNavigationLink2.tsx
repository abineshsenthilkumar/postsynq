import styles from "./styles.module.css"

export default function MenuNavigationLink2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["light-mode-7"]} href="./feature">
        <div className={styles["div-76"]}>
          <p className={styles["p-37"]}>{slots[0] ?? "Features"}</p>
        </div>
      </a>
  )
}
