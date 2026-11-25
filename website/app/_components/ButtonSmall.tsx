import styles from "./styles.module.css"

export default function ButtonSmall({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["outline-black-2"]} href="./pricing">
        <div className={styles["content-4"]}>
          <div className={styles["div-9"]}>
            <p className={styles["p-5"]}>{slots[0] ?? "Learn more"}</p>
          </div>
          <div className={styles["div-9"]}>
            <p className={styles["p-5"]}>{slots[1] ?? "Learn more"}</p>
          </div>
        </div>
      </a>
  )
}
