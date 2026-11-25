import styles from "./styles.module.css"

export default function ButtonLarge4({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["outline-black-4"]} href="./feature">
        <div className={styles["content-13"]}>
          <div className={styles["div-82"]}>
            <p className={styles["p-40"]}>{slots[0] ?? "Explore features"}</p>
          </div>
          <div className={styles["div-82"]}>
            <p className={styles["p-40"]}>{slots[1] ?? "Explore features"}</p>
          </div>
        </div>
      </a>
  )
}
