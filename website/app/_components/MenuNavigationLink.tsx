import styles from "./styles.module.css"

export default function MenuNavigationLink({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["light-mode-6"]} href="./about">
        <div className={styles["div-75"]}>
          <p className={styles["p-36"]}>{slots[0] ?? "About"}</p>
        </div>
      </a>
  )
}
