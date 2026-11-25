import styles from "./styles.module.css"

export default function ButtonLarge3({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["outline-black-3"]} href="./feature">
        <div className={styles["content-9"]}>
          <div className={styles["div-26"]}>
            <p className={styles["p-9"]}>{slots[0] ?? "See how it works    →"}</p>
          </div>
          <div className={styles["div-26"]}>
            <p className={styles["p-9"]}>{slots[1] ?? "See how it works    →"}</p>
          </div>
        </div>
      </a>
  )
}
